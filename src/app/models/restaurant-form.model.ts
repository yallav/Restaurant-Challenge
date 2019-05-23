export class RestaurantFormModel {
    id: any;
    restname: string;
    street: any;
    state: any;
    zip: any;
    address?: string;
    startday: any = 'Start Day';
    endday: any = 'End Day';
    starttime = {hour: 13, minute: 30};
    endtime = {hour: 13, minute: 30};
    opening_hours?: any = [];
    pOpening_hours?: any = [];
    image: string;
    url: any;
}