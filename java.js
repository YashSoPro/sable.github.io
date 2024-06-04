body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #87CEEB, #FFFFFF);
}

.header {
    background-color: #1976d2;
    color: white;
    text-align: center;
    padding: 1em 0;
}

.content {
    text-align: center;
    padding: 2em;
}

.profile-picture {
    background-image: url('https://i.ibb.co/pQFDkT0/1000459698.png');
    background-size: cover;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 1em;
    border: 4px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.background {
    background-image: url('https://i.ibb.co/w40fY98/1000459698.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

.section {
    margin: 2em 0;
}

.projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

.project-box {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 200px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-box:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.project-box a {
    text-decoration: none;
    color: black;
}

.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader {
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
