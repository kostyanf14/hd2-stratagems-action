import { useContext } from 'react';

import { ClientConnectionContext } from '../Contexts';
import ProtocolInfo from '../ProtocolInfo_pb';



const CMD2DIR = {
    'U': ProtocolInfo.DirectionId.DIR_UP,
    'D': ProtocolInfo.DirectionId.DIR_DOWN,
    'L': ProtocolInfo.DirectionId.DIR_LEFT,
    'R': ProtocolInfo.DirectionId.DIR_RIGHT,
  }

  const convertStratagemCommand = (command) => {
    return [...command].map((cmd) => CMD2DIR[cmd]);
  }

  const sendStratagem = (client, name, stratagemCommand) => {
    console.log('Send stratagem', name);

    const hd2req = new ProtocolInfo.Hd2Request();
    hd2req.setVersion(1);
    hd2req.setType(ProtocolInfo.RequestType.RT_STRATAGEM);
    hd2req.setStratagemList(convertStratagemCommand(stratagemCommand));

    const serializedData = hd2req.serializeBinary();
    if (client) {
      client.write(serializedData);
    }
    else {
      console.log('Client is not connected, serializedData:', serializedData);
    }
  };

const sendBtn = (client, btn) => {
  console.log('Send button' + btn);

  const hd2req = new ProtocolInfo.Hd2Request();
  hd2req.setVersion(1);
  hd2req.setType(ProtocolInfo.RequestType.RT_BUTTON);
  hd2req.setButton(btn);

  const serializedData = hd2req.serializeBinary();
  if (client) {
    client.write(serializedData);
  }
  else {
    console.log('Client is not connected, serializedData:', serializedData);
  }
};

export default ProtocolActions = {
    sendButton: sendBtn ,
    sendStratagem: sendStratagem ,
};
