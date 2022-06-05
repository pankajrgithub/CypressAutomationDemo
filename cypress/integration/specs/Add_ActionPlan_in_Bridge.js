import CreateCustomer from '../../pages/Customer_page_obj';
import LoginPage from '../../pages/login_page_obj';
import CreateBridge from '../../pages/Add_Bridge_in_Company_obj';
import AddActionPlanInCompany from '../../pages/ActionPlan_Company_page_obj';
import AddActionPlanInBridge from '../../pages/ActionPlan_in_Bridge_obj';

    describe('AddActionPlanInBridge',  {
        viewportHeight: 768,
        viewportWidth: 1366,
        },function(){
    
         it('AddActionPlan', function(){
            
            const uuid = () => Cypress._.random(0, 1e6)
            const id = uuid()
            const companyname = `MetaCX ${id}`
            const websitename = 'Testorigen';
            const bridgename= `Bridge ${id}`
            const description =`Description ${id}`;

            const login = new LoginPage()
            const customer = new CreateCustomer()
            const actionplan = new AddActionPlanInCompany()
            const bridge = new CreateBridge()
            const actionPlan = new AddActionPlanInBridge()
        
            login.visit_url()
            login.action_login('smoke-test@metacx.com','metaBoom@1nt')
            customer.action_CreateCustomer(companyname , websitename)
            actionplan.action_CreateActionPlan()
            bridge.action_CreateBridge(bridgename , description)
            bridge.verify_createdBridge(bridgename)
            actionPlan.action_AddActionPlan()
            actionPlan.verify_AddActionPlan()
            
        })  
})