import * as _ from 'underscore';

export class DialogService {
    private modals: any[] = [];

    add(modal: any) {

        this.modals.push(modal);
    }

    remove(id: string) {

        let modalToRemove = _.findWhere(this.modals, { id: id });
        this.modals = _.without(this.modals, modalToRemove);
    }

    open(id: string) {

        let modal = _.find(this.modals, { id: id });
        modal.open();
    }

    close(id: string,b:boolean) {
      console.log(b)
        let modal = _.find(this.modals, { id: id });
        modal.close(b);
    }
}
