async function loadTeamData() {
    const response = await fetch('teamData.json');
    const data = await response.json();

    renderMentors(data.mentors);
    renderTeams(data.teams);
}

function renderMentors(mentors) {
    const mentorsContainer = document.getElementById('mentors');
    mentors.forEach(mentor => {
        mentorsContainer.innerHTML += `
            <div class="bg-gray-800 p-6 rounded-lg shadow-md flex items-center space-x-4">
                <img src="${mentor.profilePhoto}" alt="${mentor.name}" class="w-16 h-16 rounded-full">
                <div>
                    <h3 class="text-lg font-semibold text-green-300">${mentor.name}</h3>
                    <div class="flex space-x-4 mt-2">
                        <a href="${mentor.GitHub}" target="_blank" class="text-gray-500 hover:text-green-400"><i class="fab fa-github fa-lg"></i></a>
                        <a href="${mentor.LinkedIn}" target="_blank" class="text-gray-500 hover:text-green-400"><i class="fab fa-linkedin fa-lg"></i></a>
                        <a href="${mentor.Instagram}" target="_blank" class="text-gray-500 hover:text-green-400"><i class="fab fa-instagram fa-lg"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderTeams(teams) {
    const teamsContainer = document.getElementById('teams');
    for (const [teamName, team] of Object.entries(teams)) {
        teamsContainer.innerHTML += `
            <div class="bg-gray-900 rounded-lg shadow-md">
                <button class="w-full text-left p-4 font-semibold text-green-300 focus:outline-none focus:ring-2" onclick="toggleAccordion('${teamName}')">
                    ${capitalize(teamName)} Team Lead
                </button>
                <div id="${teamName}" class="hidden p-4 bg-gray-800 space-y-4">
                    <div class="flex items-center space-x-4">
                        <img src="${team.lead.profilePhoto}" alt="${team.lead.name}" class="w-16 h-16 rounded-full">
                        <div>
                            <h4 class="text-lg font-semibold text-green-400">${team.lead.name}</h4>
                            <div class="flex space-x-4 mt-2">
                                <a href="${team.lead.GitHub}" target="_blank" class="text-gray-500 hover:text-green-400"><i class="fab fa-github fa-lg"></i></a>
                                <a href="${team.lead.LinkedIn}" target="_blank" class="text-gray-500 hover:text-green-400"><i class="fab fa-linkedin fa-lg"></i></a>
                                <a href="${team.lead.Instagram}" target="_blank" class="text-gray-500 hover:text-green-400"><i class="fab fa-instagram fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-700 p-4 rounded-md">
                        <h5 class="text-green-300 font-semibold">Team Members:</h5>
                        <ul class="space-y-2 mt-2">
                            ${team.members.map(member => `
                                <li class="flex items-center space-x-4">
                                    <img src="${member.profilePhoto}" alt="${member.name}" class="w-12 h-12 rounded-full">
                                    <div>
                                        <h6 class="text-green-400 font-medium">${member.name}</h6>
                                        <div class="flex space-x-2 text-gray-400">
                                            <a href="${member.GitHub}" target="_blank"><i class="fab fa-github"></i></a>
                                            <a href="${member.LinkedIn}" target="_blank"><i class="fab fa-linkedin"></i></a>
                                            <a href="${member.Instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}

function toggleAccordion(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener('DOMContentLoaded', loadTeamData);
