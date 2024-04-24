// source: ProtocolInfo.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.ButtonId', null, global);
goog.exportSymbol('proto.DirectionId', null, global);
goog.exportSymbol('proto.Hd2Request', null, global);
goog.exportSymbol('proto.RequestType', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Hd2Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Hd2Request.repeatedFields_, null);
};
goog.inherits(proto.Hd2Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Hd2Request.displayName = 'proto.Hd2Request';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Hd2Request.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Hd2Request.prototype.toObject = function(opt_includeInstance) {
  return proto.Hd2Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Hd2Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Hd2Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, 0),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    button: jspb.Message.getFieldWithDefault(msg, 3, 0),
    stratagemList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Hd2Request}
 */
proto.Hd2Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Hd2Request;
  return proto.Hd2Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Hd2Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Hd2Request}
 */
proto.Hd2Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {!proto.RequestType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.ButtonId} */ (reader.readEnum());
      msg.setButton(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.DirectionId>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addStratagem(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Hd2Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Hd2Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Hd2Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Hd2Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getButton();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStratagemList();
  if (f.length > 0) {
    writer.writePackedEnum(
      4,
      f
    );
  }
};


/**
 * optional int32 version = 1;
 * @return {number}
 */
proto.Hd2Request.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Hd2Request} returns this
 */
proto.Hd2Request.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional RequestType type = 2;
 * @return {!proto.RequestType}
 */
proto.Hd2Request.prototype.getType = function() {
  return /** @type {!proto.RequestType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.RequestType} value
 * @return {!proto.Hd2Request} returns this
 */
proto.Hd2Request.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ButtonId button = 3;
 * @return {!proto.ButtonId}
 */
proto.Hd2Request.prototype.getButton = function() {
  return /** @type {!proto.ButtonId} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ButtonId} value
 * @return {!proto.Hd2Request} returns this
 */
proto.Hd2Request.prototype.setButton = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated DirectionId stratagem = 4;
 * @return {!Array<!proto.DirectionId>}
 */
proto.Hd2Request.prototype.getStratagemList = function() {
  return /** @type {!Array<!proto.DirectionId>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.DirectionId>} value
 * @return {!proto.Hd2Request} returns this
 */
proto.Hd2Request.prototype.setStratagemList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.DirectionId} value
 * @param {number=} opt_index
 * @return {!proto.Hd2Request} returns this
 */
proto.Hd2Request.prototype.addStratagem = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Hd2Request} returns this
 */
proto.Hd2Request.prototype.clearStratagemList = function() {
  return this.setStratagemList([]);
};


/**
 * @enum {number}
 */
proto.RequestType = {
  RT_NONE: 0,
  RT_BUTTON: 1,
  RT_STRATAGEM: 2
};

/**
 * @enum {number}
 */
proto.ButtonId = {
  BTN_NONE: 0,
  BTN_LEFT: 37,
  BTN_UP: 38,
  BTN_RIGHT: 39,
  BTN_DOWN: 40,
  BTN_SELECT: 41,
  BTN_PRINT: 42,
  BTN_EXECUTE: 43,
  BTN_SNAPSHOT: 44,
  BTN_INSERT: 45,
  BTN_DELETE: 46,
  BTN_HELP: 47,
  BTN_KEY_0: 48,
  BTN_KEY_1: 49,
  BTN_KEY_2: 50,
  BTN_KEY_3: 51,
  BTN_KEY_4: 52,
  BTN_KEY_5: 53,
  BTN_KEY_6: 54,
  BTN_KEY_7: 55,
  BTN_KEY_8: 56,
  BTN_KEY_9: 57,
  BTN_KEY_A: 65,
  BTN_KEY_B: 66,
  BTN_KEY_C: 67,
  BTN_KEY_D: 68,
  BTN_KEY_E: 69,
  BTN_KEY_F: 70,
  BTN_KEY_G: 71,
  BTN_KEY_H: 72,
  BTN_KEY_I: 73,
  BTN_KEY_J: 74,
  BTN_KEY_K: 75,
  BTN_KEY_L: 76,
  BTN_KEY_M: 77,
  BTN_KEY_N: 78,
  BTN_KEY_O: 79,
  BTN_KEY_P: 80,
  BTN_KEY_Q: 81,
  BTN_KEY_R: 82,
  BTN_KEY_S: 83,
  BTN_KEY_T: 84,
  BTN_KEY_U: 85,
  BTN_KEY_V: 86,
  BTN_KEY_W: 87,
  BTN_KEY_X: 88,
  BTN_KEY_Y: 89,
  BTN_KEY_Z: 90
};

/**
 * @enum {number}
 */
proto.DirectionId = {
  DIR_NONE: 0,
  DIR_UP: 1,
  DIR_LEFT: 2,
  DIR_RIGHT: 3,
  DIR_DOWN: 4
};

goog.object.extend(exports, proto);