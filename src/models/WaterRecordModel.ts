class WaterRecordModel {
  public ClassName = "WaterRecord"

  private user: string = "";
  private ml: number = 0;

  public get getUser() {
    return this.user;
  }
  public set setUser(user: string) {
    this.user = user;
  }

  public get getMl() {
    return this.ml;
  }
  public set setMl(ml: number) {
    this.ml = ml;
  }
}

export default WaterRecordModel;
