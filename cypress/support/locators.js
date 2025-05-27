const locators = {
    LOGIN: {
        TF_WORKSPACE: '#workspace',
        TF_USERNAME: '#username',
        TF_PASSWORD: '#password',
        BTN_LOGIN: '#submit_button'
    },
    MENU: {
        MENU_LOCAIS: `a[href='/CenterWeb/serviceLocal']  >  span`,
    },
    LIST_LOCAL:{
        BTN_ADD_LOCAL: '#addServiceLocal',    
        TF_SEARCH: '#genericFilter',    
        BTN_SEARCH: '#serviceLocalList_doSearch',
        LINE_ONE: '.odd > :nth-child(2)',
        BTN_EDIT: '.edit-record-serviceLocal',
        BODY_SECTION: '.page-content',
    },  
    DETAIL_LOCAL: {
        TF_DESCRIPTION: '#serviceLocal_description',
        TF_CORPORATE_NAME: '#serviceLocal_corporateName',
        BTN_SAVE: '#formServiceLocal_doSave',
        CHK_ACTIVE: '#serviceLocal_active'
    }
}

export default locators