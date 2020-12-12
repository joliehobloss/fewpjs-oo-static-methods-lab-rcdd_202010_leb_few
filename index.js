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
for(let i = 0; i < words.length; i++) {
  if(words[i].indexOf("the")===1 || words[i].indexOf("a")===1 || words[i].indexOf("an")===1 || words[i].indexOf("but")===1 || words[i].indexOf("of")===1 || words[i].indexOf("and")===1 || words[i].indexOf("for")===1 || words[i].indexOf("at")===1 || words[i].indexOf("by")===1 || words[i].indexOf("by")===1){
  words[i] = words[i][0].toLowerCase() + words[i].substr(1);
}else{
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
  }
return words.join(" ");
}
}





/*describe( "Formatter", () => {

  describe( "titleize", () => {
    it( "is a static method", () => {
      expect( Formatter.titleize( "F forever foolish" ) ).to.not.throw
    } )

    it( "capitalizes all words in a sentence except 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'", () => {
      expect( Formatter.titleize( "getting giggles" ) ).to.equal( "Getting Giggles" )
      expect( Formatter.titleize( "where the wild things are" ) ).to.equal( "Where the Wild Things Are" )
      expect( Formatter.titleize( "chicken soup with rice and a few other songs" ) ).to.equal( "Chicken Soup With Rice and a Few Other Songs" )
      expect( Formatter.titleize( "Maurice a an but of and for at by from end" ) ).to.equal( "Maurice a an but of and for at by from End" )
    } )

    it( "always capitalizes the first word", () => {
      expect( Formatter.titleize( "a tale of two cities" ) ).to.equal( "A Tale of Two Cities" )
      expect( Formatter.titleize( "in the night kitchen" ) ).to.equal( "In the Night Kitchen" )
    } )
  } )
} )*/