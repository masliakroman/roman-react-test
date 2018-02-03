import { action, autorun, computed, observable, toJS, runInAction } from 'mobx';
import axios from 'axios';

class TableDataStore {
    @observable
    data = {
        loading: true,
        dataForTable: null,
        activePage: 1,
        pageCount: 0,
        itemPerPage: 5,
        searchingValue: ''
    };

    @computed get maxPageCount() {
        return Math.ceil(this.data.pageCount/this.data.itemPerPage);
    }

    @action.bound
    prevPage () {
        let newPage = this.data.activePage;

        this.setNewPage(newPage-1 > 0 ? newPage-1 : 1);
    }

    @action.bound
    nextPage () {
        let newPage = this.data.activePage;

        this.setNewPage(newPage+1 < this.maxPageCount ? newPage+1 : 1);
    }

    @action.bound
    changeItemPerPage (e) {
        this.data.activePage = 1;
        this.data.itemPerPage = +e.target.value;
        this.fetchData();
    }

    @action.bound
    setNewPage (val) {
        if (val.target && val.target.value) {
            this.data.activePage = +val.target.value;
        } else {
            this.data.activePage = val;
        }
        this.fetchData();
    }

    @action.bound
    setFiltering(e) {
        if (e.keyCode === 13) {
            this.data.searchingValue = e.target.value;
            this.fetchData();
        }
    }

    @action.bound
    async fetchData(param) {
        // if (!param) {
            this.data.loading = true;
        // }
        const {data, status} = await axios.get('http://webapp.test.smartcity.ibigroup.in/api/1/approvedword/?limit=' + 
            this.data.itemPerPage + '&offset=' + ((this.data.activePage - 1)*this.data.itemPerPage) + '&ordering=text' +
            (this.data.searchingValue ? '&text__icontains=' + this.data.searchingValue : ''));
        
        runInAction(() => {
            if (status === 200) {
                this.data.dataForTable = data;
                this.data.loading = false;
                this.data.pageCount = data.meta.count;
            }
        });
    }
}
export default TableDataStore;
