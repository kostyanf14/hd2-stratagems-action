import { useContext } from 'react';
import crc from 'crc';

import { ClientConnectionContext } from '../Contexts';
import ProtocolInfo from '../ProtocolInfo_pb';

const CMD2DIR = {
  'X': ProtocolInfo.ActionButtonId.A_BNT_STRATAGEM,
  'U': ProtocolInfo.ActionButtonId.A_BNT_UP,
  'D': ProtocolInfo.ActionButtonId.A_BNT_DOWN,
  'L': ProtocolInfo.ActionButtonId.A_BNT_LEFT,
  'R': ProtocolInfo.ActionButtonId.A_BNT_RIGHT,
}

const convertStratagemCommand = (command) => {
  return [...command].map((cmd) => CMD2DIR[cmd]);
}

const sendString = (client, stringCommand) => {
  const hd2req = new ProtocolInfo.Hd2Request();
  const time = Math.floor(Date.now() / 1000);

  hd2req.setVersion(1);
  hd2req.setTime(time);
  hd2req.setActionbuttonsList(convertStratagemCommand(stringCommand));

  if (client) {
    const signature = crc.crc32(time + stringCommand + client.token);
    hd2req.setSignature(signature);

    const serializedData = hd2req.serializeBinary();

    client.socket.write(serializedData);
  }
  else {
    const signature = crc.crc32(time + stringCommand + 'client.token');
    hd2req.setSignature(signature);

    const serializedData = hd2req.serializeBinary();

    console.log('Client is not connected, ignore signature, serializedData:', serializedData);
  }
};

const sendStratagem = (client, name, stratagemCommand) => {
  console.log('Send stratagem: ', name);

  const fullStratagemCommand = 'X' + stratagemCommand;

  sendString(client, fullStratagemCommand);
};

const sendButton = (client, buttonString) => {
  console.log('Send button: ', buttonString);

  sendString(client, buttonString);
};

export default ProtocolActions = {
  sendButton: sendButton,
  sendStratagem: sendStratagem,
};
