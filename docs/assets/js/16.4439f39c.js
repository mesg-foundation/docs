(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{408:function(e,n,t){"use strict";t.r(n);var s=t(33),p=Object(s.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"runner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#runner"}},[this._v("#")]),this._v(" runner")]),this._v(" "),n("api-doc",{attrs:{apifiles:{files:[{name:"protobuf/api/runner.proto",description:"",package:"mesg.api",hasEnums:!1,hasExtensions:!1,hasMessages:!0,hasServices:!0,enums:[],extensions:[],messages:[{name:"CreateRunnerRequest",longName:"CreateRunnerRequest",fullName:"mesg.api.CreateRunnerRequest",description:"The request&rsquo;s data for the `Create` API.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"serviceHash",description:"Service&rsquo;s hash to start the runner with.",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""},{name:"env",description:"Environmental variables to start the runner with.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,defaultValue:""}]},{name:"CreateRunnerResponse",longName:"CreateRunnerResponse",fullName:"mesg.api.CreateRunnerResponse",description:"The response&rsquo;s data for the `Create` API.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"hash",description:"The runner&rsquo;s hash created.",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""}]},{name:"DeleteRunnerRequest",longName:"DeleteRunnerRequest",fullName:"mesg.api.DeleteRunnerRequest",description:"The request&rsquo;s data for the `Delete` API.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"hash",description:"Runner&rsquo;s hash",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""},{name:"deleteData",description:"If true, any persistent data (volumes) that belongs to the runner&rsquo;s container and its dependencies will also be deleted.",label:"",type:"bool",longType:"bool",fullType:"bool",ismap:!1,defaultValue:""}]},{name:"DeleteRunnerResponse",longName:"DeleteRunnerResponse",fullName:"mesg.api.DeleteRunnerResponse",description:"The response&rsquo;s data for the `Delete` API.",hasExtensions:!1,hasFields:!1,extensions:[],fields:[]},{name:"GetRunnerRequest",longName:"GetRunnerRequest",fullName:"mesg.api.GetRunnerRequest",description:"The request&rsquo;s data for the `Get` API.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"hash",description:"",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""}]},{name:"ListRunnerRequest",longName:"ListRunnerRequest",fullName:"mesg.api.ListRunnerRequest",description:"The request&rsquo;s data for the `List` API.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"filter",description:"Filter used to filter runners.",label:"",type:"Filter",longType:"ListRunnerRequest.Filter",fullType:"mesg.api.ListRunnerRequest.Filter",ismap:!1,defaultValue:""}]},{name:"Filter",longName:"ListRunnerRequest.Filter",fullName:"mesg.api.ListRunnerRequest.Filter",description:"Filter contains filtering criteria.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"instanceHash",description:"Filter by instance hash.",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""},{name:"address",description:"Filter by address",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,defaultValue:""}]},{name:"ListRunnerResponse",longName:"ListRunnerResponse",fullName:"mesg.api.ListRunnerResponse",description:"The response&rsquo;s data for the `List` API.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"runners",description:"List of runners that match the request&rsquo;s filters.",label:"repeated",type:"Runner",longType:"mesg.types.Runner",fullType:"mesg.types.Runner",ismap:!1,defaultValue:""}]}],services:[{name:"Runner",longName:"Runner",fullName:"mesg.api.Runner",description:"This is the API to interact with the Runner.\n\nThis API is a [gRPC](https://grpc.io/) API.\n\nThe source file of this API is hosted on [GitHub](https://github.com/mesg-foundation/engine/blob/master/protobuf/api/runner.proto).",methods:[{name:"Get",description:"Get returns an Runner matching the criteria of the request.",requestType:"GetRunnerRequest",requestLongType:"GetRunnerRequest",requestFullType:"mesg.api.GetRunnerRequest",requestStreaming:!1,responseType:"Runner",responseLongType:".mesg.types.Runner",responseFullType:"mesg.types.Runner",responseStreaming:!1},{name:"List",description:"List returns all Runners matching the criteria of the request.",requestType:"ListRunnerRequest",requestLongType:"ListRunnerRequest",requestFullType:"mesg.api.ListRunnerRequest",requestStreaming:!1,responseType:"ListRunnerResponse",responseLongType:"ListRunnerResponse",responseFullType:"mesg.api.ListRunnerResponse",responseStreaming:!1},{name:"Create",description:"Create an Runner from a Service&rsquo;s hash and custom environmental variables.\nIt will return an unique identifier to identify the runner.",requestType:"CreateRunnerRequest",requestLongType:"CreateRunnerRequest",requestFullType:"mesg.api.CreateRunnerRequest",requestStreaming:!1,responseType:"CreateRunnerResponse",responseLongType:"CreateRunnerResponse",responseFullType:"mesg.api.CreateRunnerResponse",responseStreaming:!1},{name:"Delete",description:"Delete an Runner.",requestType:"DeleteRunnerRequest",requestLongType:"DeleteRunnerRequest",requestFullType:"mesg.api.DeleteRunnerRequest",requestStreaming:!1,responseType:"DeleteRunnerResponse",responseLongType:"DeleteRunnerResponse",responseFullType:"mesg.api.DeleteRunnerResponse",responseStreaming:!1}]}]}],scalarValueTypes:[{protoType:"double",notes:"",cppType:"double",csType:"double",goType:"float64",javaType:"double",phpType:"float",pythonType:"float",rubyType:"Float"},{protoType:"float",notes:"",cppType:"float",csType:"float",goType:"float32",javaType:"float",phpType:"float",pythonType:"float",rubyType:"Float"},{protoType:"int32",notes:"Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.",cppType:"int32",csType:"int",goType:"int32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"int64",notes:"Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.",cppType:"int64",csType:"long",goType:"int64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"uint32",notes:"Uses variable-length encoding.",cppType:"uint32",csType:"uint",goType:"uint32",javaType:"int",phpType:"integer",pythonType:"int/long",rubyType:"Bignum or Fixnum (as required)"},{protoType:"uint64",notes:"Uses variable-length encoding.",cppType:"uint64",csType:"ulong",goType:"uint64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum or Fixnum (as required)"},{protoType:"sint32",notes:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.",cppType:"int32",csType:"int",goType:"int32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"sint64",notes:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.",cppType:"int64",csType:"long",goType:"int64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"fixed32",notes:"Always four bytes. More efficient than uint32 if values are often greater than 2^28.",cppType:"uint32",csType:"uint",goType:"uint32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"fixed64",notes:"Always eight bytes. More efficient than uint64 if values are often greater than 2^56.",cppType:"uint64",csType:"ulong",goType:"uint64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"sfixed32",notes:"Always four bytes.",cppType:"int32",csType:"int",goType:"int32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"sfixed64",notes:"Always eight bytes.",cppType:"int64",csType:"long",goType:"int64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"bool",notes:"",cppType:"bool",csType:"bool",goType:"bool",javaType:"boolean",phpType:"boolean",pythonType:"boolean",rubyType:"TrueClass/FalseClass"},{protoType:"string",notes:"A string must always contain UTF-8 encoded or 7-bit ASCII text.",cppType:"string",csType:"string",goType:"string",javaType:"String",phpType:"string",pythonType:"str/unicode",rubyType:"String (UTF-8)"},{protoType:"bytes",notes:"May contain any arbitrary sequence of bytes.",cppType:"string",csType:"ByteString",goType:"[]byte",javaType:"ByteString",phpType:"string",pythonType:"str",rubyType:"String (ASCII-8BIT)"}]},typefiles:{files:[{name:"protobuf/types/runner.proto",description:"",package:"mesg.types",hasEnums:!1,hasExtensions:!1,hasMessages:!0,hasServices:!1,enums:[],extensions:[],messages:[{name:"Runner",longName:"Runner",fullName:"mesg.types.Runner",description:"Runner represents one node service&rsquo;s instance.",hasExtensions:!1,hasFields:!0,extensions:[],fields:[{name:"hash",description:"Runner&rsquo;s hash",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""},{name:"address",description:"address of the engine of this runner",label:"",type:"string",longType:"string",fullType:"string",ismap:!1,defaultValue:""},{name:"instanceHash",description:"instanceHash is hash of the instance that runner will handle",label:"",type:"bytes",longType:"bytes",fullType:"bytes",ismap:!1,defaultValue:""}]}],services:[]}],scalarValueTypes:[{protoType:"double",notes:"",cppType:"double",csType:"double",goType:"float64",javaType:"double",phpType:"float",pythonType:"float",rubyType:"Float"},{protoType:"float",notes:"",cppType:"float",csType:"float",goType:"float32",javaType:"float",phpType:"float",pythonType:"float",rubyType:"Float"},{protoType:"int32",notes:"Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead.",cppType:"int32",csType:"int",goType:"int32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"int64",notes:"Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead.",cppType:"int64",csType:"long",goType:"int64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"uint32",notes:"Uses variable-length encoding.",cppType:"uint32",csType:"uint",goType:"uint32",javaType:"int",phpType:"integer",pythonType:"int/long",rubyType:"Bignum or Fixnum (as required)"},{protoType:"uint64",notes:"Uses variable-length encoding.",cppType:"uint64",csType:"ulong",goType:"uint64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum or Fixnum (as required)"},{protoType:"sint32",notes:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.",cppType:"int32",csType:"int",goType:"int32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"sint64",notes:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.",cppType:"int64",csType:"long",goType:"int64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"fixed32",notes:"Always four bytes. More efficient than uint32 if values are often greater than 2^28.",cppType:"uint32",csType:"uint",goType:"uint32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"fixed64",notes:"Always eight bytes. More efficient than uint64 if values are often greater than 2^56.",cppType:"uint64",csType:"ulong",goType:"uint64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"sfixed32",notes:"Always four bytes.",cppType:"int32",csType:"int",goType:"int32",javaType:"int",phpType:"integer",pythonType:"int",rubyType:"Bignum or Fixnum (as required)"},{protoType:"sfixed64",notes:"Always eight bytes.",cppType:"int64",csType:"long",goType:"int64",javaType:"long",phpType:"integer/string",pythonType:"int/long",rubyType:"Bignum"},{protoType:"bool",notes:"",cppType:"bool",csType:"bool",goType:"bool",javaType:"boolean",phpType:"boolean",pythonType:"boolean",rubyType:"TrueClass/FalseClass"},{protoType:"string",notes:"A string must always contain UTF-8 encoded or 7-bit ASCII text.",cppType:"string",csType:"string",goType:"string",javaType:"String",phpType:"string",pythonType:"str/unicode",rubyType:"String (UTF-8)"},{protoType:"bytes",notes:"May contain any arbitrary sequence of bytes.",cppType:"string",csType:"ByteString",goType:"[]byte",javaType:"ByteString",phpType:"string",pythonType:"str",rubyType:"String (ASCII-8BIT)"}]}}})],1)}),[],!1,null,null,null);n.default=p.exports}}]);