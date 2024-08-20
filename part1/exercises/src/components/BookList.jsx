export default function BookList() {
   let pageTitle = "Coming Soon to a Book Shelf Near You";
   let book1 = "https://images1.penguinrandomhouse.com/cover/9780593727935";
   let book2 = "https://images3.penguinrandomhouse.com/cover/9781984805881";
   let book3 = "https://images1.penguinrandomhouse.com/cover/9780593733257";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Plan by Kendra Adachi" />
         <img src={book2} alt="The Village Library Demon-Hunting Society by C. M. Waggoner" />
         <img src={book3} alt="A Sunny Place for Shady People by Mariana Enriquez" />
      </div>      
   );
}