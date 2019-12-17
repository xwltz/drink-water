var Av = require("leancloud-storage");

Av.init({
  appId: "n0QM0wpkOVe8zdb3iE2NH2NF-gzGzoHsz",
  appKey: "fBFbBcRiVyOYA4OWeVcSh1uG",
  masterKey: "IvD2QkuceUXjjNBFlB8rv3m6",
  serverURLs: "https://n0qm0wpk.lc-cn-n1-shared.com"
});

Av.debug.enable();

interface BaseModel {
  ClassName: string
}

function addModel<T extends BaseModel>(model: T): string {
  var addModel = Av.Object.extend(model.ClassName);
  var addObject = new addModel();

  var value = addObject.save(model).then(
    function(result: any) {
      return `保存成功！：[${result.id}]`;
    },
    function(error: any) {
      return `保存失败！`;
    }
  );
  return value;
}

function updateModel() {
  return "";
}

function deleteModel() {
  return "";
}

function getModel(id: string) {
  return "";
}

function queryList(user: string = "") {
  var query = new Av.Query("WaterRecord");
  if (user !== "") {
    query.equalTo("user", user);
  }
  query.addDescending("createdAt");
  var list = query.find().then(function(result: any) {
    return result;
  });
  return list;
}

export default { addModel, updateModel, deleteModel, getModel, queryList };
