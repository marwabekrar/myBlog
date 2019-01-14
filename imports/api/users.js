import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import {Accounts} from 'meteor/accounts-base';


Accounts.validateNewUser((user)=>{
    const email = user.emails[0].address;
    
    new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.EmailWithTLD
      }
    }).validate({email});
   
    return true;
  });

//Roles.addUsersToRoles( "tzHBdbwM89PnnYhkH", ['admin'] );

const adminUser = {email:"admin@evaluation.ca",roles:['admin']};

if(!!Accounts.findUserByEmail(adminUser.email)) {
	return;
}else{

		const id = Accounts.createUser({
		    email: adminUser.email,
		    password: "Admin@2014"
		  });

		Roles.addUsersToRoles(id, adminUser.roles);

}


