body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #87CEEB, #FFFFFF);
  display: flex; /* Center content vertically */
  min-height: 100vh; /* Set minimum height for full viewport */
  align-items: center; /* Center content horizontally */
}

.header {
  background-color: #1976d2;
  color: white;
  padding: 1em 0;
}

.content {
  padding: 2em;
}

.profile-picture {
  /* Removed: profile picture styles */
}

.background {
  background-image: url('https://i.ibb.co/w40fY98/1000459698.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto; /* Removed fixed height */
}

.section {
  margin-bottom: 2em;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

.project-box {
  background-color: #f8f9fa;
  border: 1px solid #ddd
