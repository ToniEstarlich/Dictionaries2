function my_Dictionary() {//Defining a function an naming it
    var Animal = {//Defining a variable giving it a 
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    }; 
    document.getElementById("Dictionary").innerHTML= Animal.Sound;//this do our code would be "Sound"
}

function my_Dictionary() {//Defining a function an naming it
    var Animal = {//Defining a variable giving it a
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!",
    };
    delete Animal.Sound;//this code woud be:"undefinined"
    document.getElementById("Dictionary").innerHTML=Animal.Sound;//this do our code would be "Sound"
}

}