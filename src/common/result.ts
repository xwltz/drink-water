interface JsonResult {
  resState: boolean;
  resMsg: string;
  result: object;
}

class JsonResultModel {
  public static success(obj: object): JsonResult {
    var value: JsonResult = {
      resState: true,
      resMsg: "请求成功",
      result: obj
    };
    return value;
  }
}

export default JsonResultModel;
