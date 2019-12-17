import React from 'react';
import { Layout, Breadcrumb, Table, Card } from 'antd';
import { Chart, Geom, Axis, Tooltip } from "bizcharts";
import api from '../services/WaterRecord'
import { DateUtil } from '../common/utils'

const { Content } = Layout;
const { Column } = Table;

export default class IndexModule extends React.Component {

  state = {
    loading: false,
    datalist: []
  }

  componentDidMount() {
    this.getlist();
  }

  async getlist() {
    this.setState({ loading: true });
    var list = await api.getList()
    if (list.resState === true) {
      this.setState({ datalist: list.result });
    } else {
      alert(list.resMsg)
    }
    this.setState({ loading: false });
    // var add = api.addModel();
    // console.log(add);
  }

  render() {

    const data = [
      {
        year: "1951 年",
        sales: 38
      },
      {
        year: "1952 年",
        sales: 52
      },
      {
        year: "1956 年",
        sales: 61
      },
      {
        year: "1957 年",
        sales: 145
      },
      {
        year: "1958 年",
        sales: 48
      },
      {
        year: "1959 年",
        sales: 38
      },
      {
        year: "1960 年",
        sales: 38
      },
      {
        year: "1962 年",
        sales: 38
      }
    ];
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <Content style={{ margin: '15px' }}>
        <div>
          <Breadcrumb style={{ margin: '15px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Card>
            <Table dataSource={this.state.datalist} loading={this.state.loading} bordered rowKey="id">
              <Column title="姓名" width={200} dataIndex="attributes.user" key="attributes.user" />
              <Column title="容量" width={200} dataIndex="attributes.ml" key="attributes.ml" />
              <Column title="新增时间" dataIndex="createdTime" key="createdTime" render={(text:string, record: any) =>{
                  return new DateUtil(record.createdAt).format();
              }}/>
              <Column title="修改时间" dataIndex="updatedTime" key="updatedTime"  render={(text:string, record: any) =>{
                  return new DateUtil(record.createdAt).format();
              }}/>
            </Table>
          </Card>
          <div>
            <Chart height={400} data={data} scale={cols} forceFit>
              <Axis name="year" />
              <Axis name="sales" />
              <Tooltip crosshairs={{ type: "y" }} />
              <Geom type="interval" position="year*sales" />
            </Chart>
          </div>
        </div>
      </Content>
    );
  }
}
