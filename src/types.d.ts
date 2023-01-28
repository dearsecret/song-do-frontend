export interface IPassword {
    oldPW : string;
    newPW : string;
}

export interface IContract{
    pk : number ;
    name : string;
    area : number;
    area_fee : number;
}

export interface IOwnerCharge{
    title : string;
    charge : number;
}
export interface INotice{
    pk : number ;
    title: string;
}

export interface IMemo{
    comment : string;
    description : string;
}


export interface IBill{
    pk : number ;
    __str__ : string ;
    start_date : String;
    bill_date : String;
}

export interface IBillDetail extends IBill {
    usage_sum : number ;
    owner_charge : IOwnerCharge[];
    memos : IMemo[];
    public_share : number;
    public_usage : number;
    total_public : number;
    none_tax : number;
    unit_price : number;
    ratio : number;
    total : number;
    maintanance : number;
    floor : number;
    basic : number;
    usage : number;
    usage_sum :number;
    area_sum : number;
}

export interface IInvoice{
    pk : number
    is_payed : boolean;
    bill : IBill
    __str__ : String
}
export interface IInvoiceDetail extends IInvoice{
    usage : number;
    contract : IContract;
    bill : IBillDetail;
    public_share : number;
    area_fee : number;
    basic : number;
    ratio_usage : number;
    add_unit : number;
    without_tax : number;
    tax : number;
    add_tax : number;
    public_usage : number;
    public : number;
    total : number;
}

export interface IVariables {
    custNo : String;
    billYm : String;
}

export interface CustNo {
    title : string;
    custNum :string;
}

export interface ElecInfo {
    custNo : CustNo;
    bill_ym : string;
    mr_ymd : string;
    bill_aply_pwr : string;
    move_ymd : string;
    base_bill : string;
    kwh_bill : string;
    dc_bill : string;
    req_bill : string;
    req_amt : string;
    lload_usekwh : string;
    mload_usekwh : string;
    maxload_usekwh : string;
    lload_needle : string;
    mload_needle : string;
    maxload_needle : string;
    jn_pwrfact : string;
    ji_pwrfact : string;
}