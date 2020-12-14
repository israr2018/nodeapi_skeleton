const yup=require('yup');
module.exports=yup.object().shape({
pageTitle:yup.string().required(),
slug:yup.string().trim().required(),
email:yup.string().required().email(),
code:yup.string().required()


});
