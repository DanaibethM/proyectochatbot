const keyword_extractor = require("keyword-extractor");  


const sentence = ""; 



const extraction_result = keyword_extractor.extract(sentence,{
    language:"spanish",
    remove_digits: true,
    return_changed_case:true,
    remove_duplicates: false
}); 