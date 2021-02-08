import { Vue, Component } from 'vue-property-decorator';
import VTable from '../components/table/table';


@Component
export default class Table extends Vue {
  public basicTable() {
    return (
      <div>
        <h2>基础表格</h2>
        <ul>
          <li>
            <VTable></VTable>
          </li>
        </ul>
      </div>
    );
  }
  public render() {
    return (
      <div>
        {this.basicTable()}
      </div>
    );
  }
}
