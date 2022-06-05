import LoginPage from '../../pages/login_page_obj'

describe('Login', function(){
    it('Login', function(){
    const login =new LoginPage()
    login.visit_url()
    login.action_login('smoke-test@metacx.com','metaBoom@1nt')
    login.verify_customerPage()
    })  
})