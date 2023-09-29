import http from "http";
import dotenv from "dotenv";
dotenv.config();

const newsData = [
  {
    id: 1,
    title: "New Art Exhibition Opens in Downtown Gallery",
    text: "Experience the latest works of contemporary artists at the Downtown Gallery. Don't miss this opportunity to immerse yourself in the world of art.",
  },
  {
    id: 2,
    title: "Grand Opening of Smith's Bakery",
    text: "Join us for the grand opening of Smith's Bakery! We're serving freshly baked bread, pastries, and cakes that will delight your taste buds.",
  },
  {
    id: 3,
    title: "A Fox in Chernihiv Zoo Gives Birth to a Cub",
    text: "A wonderful event has occurred at the Chernihiv Zoo! A fox named Red has given birth to a beautiful cub! So hurry up and visit to see this adorable creature!",
  },
  {
    id: 4,
    title: "Tech Innovation Summit 2023",
    text: "Get ready for the Tech Innovation Summit 2023, where industry leaders will discuss the latest trends and advancements in technology. Register now!",
  },
  {
    id: 5,
    title: "Local Charity Run Raises Funds for Children's Hospital",
    text: "Participate in the upcoming charity run to support the Children's Hospital. Your contribution can make a significant difference in a child's life.",
  },
  {
    id: 6,
    title: "New Restaurant Opening Soon!",
    text: "Exciting news! A new restaurant is coming to town, offering a diverse menu and a cozy atmosphere. Stay tuned for the grand opening date.",
  },
  {
    id: 7,
    title: "Book Launch Event: 'Mystery at Midnight'",
    text: "Join us for the book launch event of 'Mystery at Midnight.' Meet the author, get your copy signed, and enjoy an evening of suspense and intrigue.",
  },
  {
    id: 8,
    title: "Summer Music Festival Lineup Revealed",
    text: "The lineup for this year's Summer Music Festival is out! Get ready to groove to the beats of your favorite artists. Tickets are now available.",
  },
  {
    id: 9,
    title: "Local Farmers' Market Returns Every Saturday",
    text: "Support local farmers and artisans at the weekly Farmers' Market. Fresh produce, handmade crafts, and delicious treats await you every Saturday.",
  },
  {
    id: 10,
    title: "New Fitness Studio Offers Free Trial Classes",
    text: "Looking to get fit? Try out our new fitness studio with complimentary trial classes. Achieve your health goals with us!",
  },
  {
    id: 11,
    title: "Volunteer Cleanup Day at City Park",
    text: "Join us for a volunteer cleanup day at City Park. Help keep our community green and beautiful. Gloves and trash bags will be provided.",
  },
  {
    id: 12,
    title: "Local Artisans' Fair This Weekend",
    text: "Discover unique handmade crafts and art pieces at the Local Artisans' Fair this weekend. Support local talent and find one-of-a-kind treasures.",
  },
  {
    id: 13,
    title: "Hiking Club's Monthly Adventure",
    text: "Calling all nature enthusiasts! Join our hiking club for our monthly adventure. Explore scenic trails and connect with fellow outdoor lovers.",
  },
  {
    id: 14,
    title: "Science Fair for Kids - Register Your Young Scientist",
    text: "Encourage your child's love for science! Register them for the upcoming Science Fair for Kids. Fun experiments and prizes await!",
  },
  {
    id: 15,
    title: "Food Truck Festival Returns to Downtown",
    text: "Satisfy your taste buds at the Food Truck Festival in downtown. A variety of cuisines and flavors to choose from. Don't miss it!",
  },
  {
    id: 16,
    title: "Free Community Yoga Class Every Sunday",
    text: "Join our free community yoga class every Sunday morning. Relax, stretch, and find your inner peace in a serene outdoor setting.",
  },
  {
    id: 17,
    title: "Annual Flower Show at Botanical Gardens",
    text: "Experience the beauty of nature at the Annual Flower Show. Marvel at exquisite blooms and learn gardening tips from experts.",
  },
  {
    id: 18,
    title: "Local Theater Presents 'Shakespeare in the Park'",
    text: "Enjoy a night of classic theater under the stars. The local theater presents 'Shakespeare in the Park' this weekend. Bring your picnic blanket!",
  },
  {
    id: 19,
    title: "Tech Workshop for Beginners",
    text: "New to technology? Join our Tech Workshop for Beginners and gain essential skills. No prior experience required!",
  },
  {
    id: 20,
    title: "Family Fun Day at the Zoo",
    text: "Plan a day of family fun at the zoo! Explore wildlife, enjoy animal shows, and create lasting memories with your loved ones.",
  },
  {
    id: 21,
    title: "Local Environmental Seminar Series",
    text: "Become an eco-conscious citizen! Attend our Local Environmental Seminar Series and learn about sustainability and conservation.",
  },
  {
    id: 22,
    title: "Movie Night Under the Stars",
    text: "Grab your blankets and popcorn for a movie night under the stars. A family-friendly film awaits at our outdoor cinema.",
  },
  {
    id: 23,
    title: "Antique Car Show This Saturday",
    text: "Admire classic automobiles at the Antique Car Show this Saturday. Vintage cars, live music, and food trucks for a nostalgic day.",
  },
  {
    id: 24,
    title: "Annual Charity Gala - Save the Date",
    text: "Mark your calendars for the Annual Charity Gala. An elegant evening of philanthropy, entertainment, and fundraising awaits.",
  },
  {
    id: 25,
    title: "Community Potluck Picnic in the Park",
    text: "Bring your favorite dish to our Community Potluck Picnic. Share food, laughter, and stories with your neighbors.",
  },
  {
    id: 26,
    title: "Summer Reading Program for Kids",
    text: "Ignite your child's passion for reading! Enroll them in our Summer Reading Program for Kids. Prizes and fun activities included.",
  },
  {
    id: 27,
    title: "Local Wine Tasting Event",
    text: "Sample a variety of local wines at our Wine Tasting Event. Discover new flavors and enjoy a relaxing evening.",
  },
  {
    id: 28,
    title: "Pet Adoption Day at the Animal Shelter",
    text: "Find your new furry friend at Pet Adoption Day! Visit the local animal shelter and give a loving home to a pet in need.",
  },
  {
    id: 29,
    title: "Cooking Class: Mastering Italian Cuisine",
    text: "Learn the art of Italian cooking in our Cooking Class. Create delicious pasta dishes and more with our expert chef.",
  },
  {
    id: 30,
    title: "Gardening Workshop: Tips for a Thriving Garden",
    text: "Transform your garden into a lush paradise! Join our Gardening Workshop and gain valuable insights from gardening experts.",
  },
  {
    id: 31,
    title: "Art Workshop for Teens",
    text: "Calling all creative teens! Join our Art Workshop and explore various art forms under the guidance of experienced artists.",
  },
  {
    id: 32,
    title: "Local Craft Beer Tasting Event",
    text: "Discover the rich flavors of local craft beers at our tasting event. Enjoy a night of brews, food pairings, and good company.",
  },
  {
    id: 33,
    title: "Community Yoga Retreat Weekend",
    text: "Escape the hustle and bustle. Join our Community Yoga Retreat Weekend for relaxation, meditation, and inner peace.",
  },
  {
    id: 34,
    title: "Family Movie Night at the Park",
    text: "Bring your family for a movie night at the park. Enjoy a classic film under the open sky. Don't forget your blankets and snacks!",
  },
  {
    id: 35,
    title: "Local History Museum Reopens with New Exhibits",
    text: "Explore the rich history of our town at the Local History Museum. We've reopened with exciting new exhibits and artifacts.",
  },
  {
    id: 36,
    title: "Cooking Competition: Battle of the Chefs",
    text: "Witness culinary excellence at the Cooking Competition: Battle of the Chefs. Top chefs compete for the title of culinary champion.",
  },
  {
    id: 37,
    title: "Summer Science Camp for Kids",
    text: "Make your child's summer memorable with our Summer Science Camp. Hands-on experiments, fun learning, and outdoor activities await!",
  },
  {
    id: 38,
    title: "Folk Music Festival in the Park",
    text: "Immerse yourself in the melodies of folk music at our festival in the park. Live performances, dancing, and cultural experiences.",
  },
  {
    id: 39,
    title: "Tech Conference: Future of Artificial Intelligence",
    text: "Stay ahead in the tech world. Attend our Tech Conference on the Future of Artificial Intelligence. Explore AI trends and applications.",
  },
  {
    id: 40,
    title: "Community Charity Auction - Bid for a Cause",
    text: "Join us for the Community Charity Auction and bid for a cause. Unique items, experiences, and art pieces up for grabs.",
  },
];

const newsletterServer = http.createServer((req, res) => {
  res.write("hello world");
  // console.log(req.url);
  const ourPath = req.url.split("/?")[1].split("&");

  const firstPart = ourPath[0];
  const secondPart = ourPath[1];

  // console.log(pagePart.split("=")); ===>>>[ 'page', '1' ]

  const [page, pageNumber] = firstPart.split("=");
  console.log(page, pageNumber);

  const [size, sizeNumber] = secondPart.split("=");
  console.log(size, sizeNumber);

  const lengthOfData = newsData.length;
  console.log(lengthOfData);

  // TOTAL = 40 PAGE:X SIZE: Y
  // STARTINDEX=? LASTINDEX=?
  // STARTINDEX = (PAGE - 1)*SIZE
  // LASTINDEX = PAGE*SIZE-1
  const startIndex = (parseInt(pageNumber) - 1) * parseInt(size);
  const lastIndex = parseInt(pageNumber) * parseInt(size) - 1;

  if ((page === "page") & (size === "size")) {
  } else {
    res.writeHead(404, "Wrong Path");
  }

  // console.log(ourPath); ==>> [ 'page=1', 'size=30' ]
  res.end();
});

const host = process.env.HOST;
const port = process.env.PORT;

newsletterServer.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
