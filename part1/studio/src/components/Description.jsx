import React from "react";
import styles from './Description.module.css';

const RecipeAuthor = () => {
    let authorLink = "https://www.seriouseats.com/extra-crispy-fried-chicken-with-caramelized-honey-and-spice";
    let authorPhoto = "https://assets-global.website-files.com/644e0b16c3356ea44f61b368/6450b37bb84eb2d61767f166_Rectangle%2013.png";
    let authorName = "Sohla El-Waylly";

    return (
        rendor(
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Photo of Sohla" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Serious Eats</a> 
           </div>
        </div>
        )
     );

};

class RecipeDescription extends React.Component {
    render() {
        return(
            <div> 
            <div>
                <h1>Extra-Crispy Fried Chicken With Caramelized Honey and Spice </h1>
                <p>Inspired by Popeyes, this fried chicken has that signature airy crust of rugged and scraggy bits, coupled with some personal touches.</p>
            </div>
            <RecipeAuthor />
        </div>
        )
    };
};

export default RecipeDescription;