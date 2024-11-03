// Sample Posts Data with URLs
const posts = [
    { title: "Top 20 VoIP Providers for Small Businesses", content: "Explore the best VoIP providers for small businesses, including features, pricing, and setup details.", url: "post1.html" },
    { title: "How to Choose the Right VoIP Provider", content: "Learn what to consider when choosing a VoIP provider to meet your business needs.", url: "post2.html" },
    { title: "Benefits of Using VoIP for Remote Teams", content: "Discover how VoIP solutions can support remote teams with cost savings and flexibility.", url: "post3.html" },
    { title: "Comparing VoIP Providers for Enterprises", content: "A look at top VoIP providers and how they serve large organizations.", url: "post4.html" },
    { title: "VoIP vs. Traditional Phone Systems", content: "Understand the differences between VoIP and traditional phone systems.", url: "post5.html" },
    { title: "Cloud-Based VoIP Solutions", content: "Benefits and features of cloud-based VoIP solutions for businesses.", url: "post6.html" },
    { title: "VoIP Features to Look for in 2024", content: "Explore the must-have features in VoIP providers this year.", url: "post7.html" },
    { title: "Best VoIP Providers for Customer Support", content: "VoIP options for companies focused on exceptional customer support.", url: "post8.html" },
    { title: "Integrating VoIP with CRM Systems", content: "How to integrate VoIP with CRM systems for seamless customer service.", url: "post9.html" },
    { title: "Reducing Costs with VoIP Services", content: "Strategies for using VoIP to reduce communication costs.", url: "post10.html" }
];

// Function to Display Posts on Home Page
function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h3><a href="${post.url}">${post.title}</a></h3><p>${post.content}</p>`;
        postsContainer.appendChild(postElement);
    });
}

// Function to Display Latest Posts in Sidebar
function displayLatestPosts() {
    const latestPostsContainer = document.getElementById('latest-posts');
    posts.slice(0, 5).forEach(post => {
        const postItem = document.createElement('li');
        postItem.innerHTML = `<a href="${post.url}">${post.title}</a>`;
        latestPostsContainer.appendChild(postItem);
    });
}

// Initialize the Display Functions
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    displayLatestPosts();
});
