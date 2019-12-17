import WaterRecordModel from "../models/WaterRecordModel";
import db from "../common/leancloud";
import result from '../common/result'

function addModle(): string {
  var models = new WaterRecordModel();
  models.setUser = "xwltz";
  models.setMl = 500;
  var value = db.addModel(models);
  return value;
}

async function getList() {
  var list: any = await db.queryList();
  list.forEach((element: any) => {
    var d = new Date(element.createdAt);
    var time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    console.log(time);
  });
  debugger
  return result.success(list);
}

export default {
  addModel: addModle,
  getList: getList
};
