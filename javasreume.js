document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');
  
    const jobs = [
      {
        title: 'cloud pratitioner',
        company: 'Tech Company A',
        duration: 'Jan 2025 - Present',
        description: 'Built and maintained responsive web applications using React.'
      },
      {
        title: 'Web Developer Intern',
        company: 'Startup B',
        duration: 'Jun 2021 - Dec 2024',
        description: 'Assisted with website development, bug fixes, and UI improvements.'
      },
      {
        title: 'Freelancer',
        company: 'Various Clients',
        duration: '2020 - 2021',
        description: 'Designed and developed small business websites.'
      }
    ];
  
    jobs.forEach(job => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
  
      item.innerHTML = `
        <h3>${job.title} @ ${job.company}</h3>
        <p><strong>${job.duration}</strong></p>
        <p>${job.description}</p>
      `;
  
      timeline.appendChild(item);
    });
  });
  
  