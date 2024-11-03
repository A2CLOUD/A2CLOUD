// Sample Posts Data
const posts = [
    { title: "Hostinger vs Bluehost: A Comprehensive Comparison", content: "Hostinger's cost-effectiveness and Bluehost's integration with WordPress, giving readers a clear understanding of the pros and cons of both options." },
    { title: "AWS vs. DigitalOcean: A Comprehensive Comparison", content: "AWS vs DigitalOcean: In this article, we compare two prominent cloud service providers: Amazon Web Services (AWS) and DigitalOcean. The post examines their respective features, pricing structures, performance metrics, and support options.." },
    { title: "The Best Cloud Server Providers in 2024", content: "Best Cloud Server Providers: This post presents a detailed overview of the best cloud server providers available in 2024. It covers a range of providers, including AWS, Microsoft Azure, Google Cloud Platform, DigitalOcean, and more, outlining their features, pricing, performance, and support." },
    { title: "Comparing VoIP Providers for Enterprises", content: "A look at top VoIP providers and how they serve large organizations." },
    { title: "VoIP vs. Traditional Phone Systems", content: "Understand the differences between VoIP and traditional phone systems." },
    { title: "Cloud-Based VoIP Solutions", content: "Benefits and features of cloud-based VoIP solutions for businesses." },
    { title: "VoIP Features to Look for in 2024", content: "Explore the must-have features in VoIP providers this year." },
    { title: "Best VoIP Providers for Customer Support", content: "VoIP options for companies focused on exceptional customer support." },
    { title: "Integrating VoIP with CRM Systems", content: "How to integrate VoIP with CRM systems for seamless customer service." },
    { title: "Reducing Costs with VoIP Services", content: "Strategies for using VoIP to reduce communication costs." }
];

// Function to Display Posts on Home Page
function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<h3><a href="post${index + 1}.html">${post.title}</a></h3><p>${post.content.substring(0, 100)}...</p>`;
        postsContainer.appendChild(postElement);
    });
}

// Function to Display Latest Posts in Sidebar
function displayLatestPosts() {
    const latestPostsContainer = document.getElementById('latest-posts');
    posts.slice(0, 8).forEach((post, index) => {
        const postItem = document.createElement('li');
        postItem.innerHTML = `<a href="post${index + 1}.html">${post.title}</a>`;
        latestPostsContainer.appendChild(postItem);
    });
}

// Initialize the Display Functions
document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
    displayLatestPosts();
});
