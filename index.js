class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
   static sanitize(string){
    return string.replace(/[&\/\\#,+()$~%.!@^":*?<>{}]/g, '');
  }
 
static titleize(string){
const words = string.split(" ");
words[0].charAt(0).toUpperCase() + string.slice(1);
for(let i = 1; i < words.length; i++) {
if(words[i]==="the" || words[i]==="a" || words[i]==="an" || words[i]==="but" || words[i]==="of" || words[i]==="and" || words[i]==="for" || words[i]==="at" || words[i]==="by" || words[i]==="from"){
  words[i] = words[i][0].toLowerCase() + words[i].substr(1);
}else{
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

  }
return words.join(" ");
}
}





/*describe( "Formatter", () => {
    it( "always capitalizes the first word", () => {
      expect( Formatter.titleize( "a tale of two cities" ) ).to.equal( "A Tale of Two Cities" )
      expect( Formatter.titleize( "in the night kitchen" ) ).to.equal( "In the Night Kitchen" )
    } )
  } )
} )*/