const { createApp, ref, computed, onMounted, onUnmounted } = Vue;

const translations = {
  th: {
    nav: { home: 'หน้าแรก', about: 'เกี่ยวกับ', skills: 'ทักษะ', projects: 'ผลงาน', contact: 'ติดต่อ' },
    theme: { toggle: 'สลับโหมดสว่าง/มืด' },
    navigation: { toggleMenu: 'เปิด/ปิดเมนู' },
    hero: {
      badge: 'กำลังเรียนอยู่และกำลังมองหาที่ฝึกงาน',
      titlePrefix: 'สวัสดีครับผม',
      viewProjects: 'ดูผลงาน',
      contactMe: 'ติดต่อฉัน',
      scrollDown: 'เลื่อนลง'
    },
    about: {
      tag: 'เกี่ยวกับฉัน',
      title: 'เกี่ยวกับฉัน',
      experience: 'ประสบการณ์',
      downloadResume: 'ดาวน์โหลด Resume'
    },
    skills: { tag: 'ทักษะ', title: 'Tech Stack' },
    certificatesSection: { tag: 'ประกาศนียบัตร', title: 'ประกาศนียบัตร & การฝึกอบรม' },
    // FIX: renamed from `projects` to `projectsSection` to avoid clashing with the
    // `projects` array key further below (duplicate keys in the same object cause
    // the later one to silently overwrite the earlier one).
    projectsSection: { tag: 'ผลงาน', title: 'ผลงาน' },
    contact: {
      tag: 'ติดต่อ',
      title: 'ติดต่อฉัน',
      nameLabel: 'ชื่อ',
      namePlaceholder: 'ชื่อของคุณ',
      emailLabel: 'อีเมล',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'หัวข้อ',
      subjectPlaceholder: 'หัวข้อข้อความ',
      messageLabel: 'ข้อความ',
      messagePlaceholder: 'เขียนข้อความของคุณ...',
      submit: 'ส่งข้อความ',
      success: '✓ ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อมา',
      error: 'ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ หรือติดต่อทางอีเมลโดยตรง'
    },
    footer: { builtWith: 'สร้างด้วย HTML, CSS, JS & Vue' },
    profile: {
      name: 'ธนภัทร มณีนวล',
      title: 'นักศึกษาฝึกงาน IT กำลังมองหาที่ฝึกงาน Front-end Back-end Full-Stack',
      bio: 'ผมเป็นนักศึกษาที่กำลังเรียนรู้การสร้างเว็บไซต์และชอบลองทำสิ่งต่าง ๆ ให้ดูดีและใช้งานง่าย',
      location: 'ประเทศไทย',
      about: [
        'นักศึกษาเทคโนโลยีสารสนเทศที่มีความกระตือรือร้น เชี่ยวชาญด้านการพัฒนาเว็บแบบ Full-stack มีประสบการณ์ในการใช้ React, Node.js และ SQL ปัจจุบันกำลังมองหาโอกาสฝึกงานด้าน IT เพื่อนำทักษะและความหลงใหลในการพัฒนาซอฟต์แวร์มาใช้งานจริง',
        
      ]
    },
    stats: [
      { value: '3+', label: 'โปรเจกต์' },
      { value: '5+', label: 'เทคโนโลยีที่ใช้ได้' }
    ],
    highlights: [
      'พัฒนาเว็บแอปพลิเคชันแบบ Full-Stack (React, TypeScript, Node.js)',
      'ออกแบบและจัดการระบบฐานข้อมูล (PostgreSQL, MySQL, Prisma)',
      'ออกแบบระบบและส่วนติดต่อผู้ใช้งาน (System Design, Figma, Tailwind CSS)',
      'เขียนภาษาโปรแกรมและใช้งานโครงสร้างข้อมูล (JavaScript, Java, C, HTML/CSS)'
    ],
    roles: ['นักศึกษาฝึกงานที่มองหาการฝึกงานรูปแบบ Full-Stack Developer', 'นักศึกษาฝึกงานที่มองหาการฝึกงานรูปแบบ UI/UX Designer'],
    skillsList: [
      { name: 'HTML / CSS', level: 80, color: '#e34c26', icon: 'H' },
      { name: 'JavaScript', level: 70, color: '#f7df1e', icon: 'JS' },
      { name: 'Vue.js', level: 70, color: '#42b883', icon: 'V' },
      { name: 'React', level: 70, color: '#61dafb', icon: 'R' },
      { name: 'Node.js', level: 70, color: '#68a063', icon: 'N' },
      { name: 'TypeScript', level: 70, color: '#3178c6', icon: 'TS' },
      { name: 'Python', level: 70, color: '#3776ab', icon: 'Py' },
      { name: 'Figma / UI Design', level: 70, color: '#f24e1e', icon: 'F' },
      { name: 'VS Code', level: 70, color: '#007acc', icon: 'VS' },
      { name: 'Oracle', level: 70, color: '#f80000', icon: 'O' },
      { name: 'Git', level: 70, color: '#f05032', icon: 'G' },
      { name: 'MySQL Workbench', level: 70, color: '#4479a1', icon: 'DB' },
      { name: 'Postman', level: 70, color: '#ff6c37', icon: 'P' },
      { name: 'PostgreSQL', level: 70, color: '#336791', icon: 'PG' },
      { name: 'MySQL', level: 70, color: '#00758f', icon: 'MY' }
    ],
    softSkillsTitle: 'Soft Skills',
    softSkills: ['สื่อสารเข้าสังคมได้ดี', 'ทำงานเป็นทีมได้ดี', 'สามารถแก้ไขปัญหาเฉพาะหน้าได้ดี', 'ปรับตัวกับการทำงานได้ดี'],
    projectCategories: ['ทั้งหมด', 'Web App', 'Design'],
    projects: [
      {
        id: 1,
        title: 'การพัฒนาระบบสั่งซื้อและจัดการร้านบัวลอยแป๊ะอ้วน',
        description: 'มีวัตถุประสงค์เพื่อนำระบบเทคโนโลยีสารสนเทศเข้ามาแก้ปัญหาการจัดการภายในร้าน ที่เดิมทียังไม่มีระบบรองรับ',
        tags: ['HTML','React.js', 'Node.js','TypeScript','PostgreSQL'],
        category: 'Web App',
        emoji: '🚀',
        image: 'assets/logo.png',
        gradient: 'linear-gradient(135deg, #e6e6e6, #f3ffaf)',
        demo: 'https://pa-ouan-shop.onrender.com',
        github: 'https://github.com/poteagamer-source/pa-ouan-shop'
      },
      {
        id: 2,
        title: 'แฟ้มสะสมผลงาน',
        description: 'เป็นโปรเจกต์ฝึกฝนแฟ้มสะสมผลงาน',
        tags: ['Vue.js', 'JavaScript', 'CSS'],
        category: 'Web App',
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #a6afff, #6b36fc)',
        demo: 'https://portfolio-1-qf9p.onrender.com/',
        github: 'https://github.com/poteagamer-source/Portfolio'
      },
      {
        id: 3,
        title: 'ระบบลงทะเบียนเรียนเทคนิคหาดใหญ่',
        description: 'เว็ประบบลงทะเบียนเรียนเทคนิคหาดใหญ่',
        tags: ['HTML','PHP', 'JavaScript', 'CSS'],
        category: 'Web App',
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #a6afff, #6b36fc)',
        demo: 'https://project-66-edit-1-3cpm.onrender.com',
        github: 'https://github.com/poteagamer-source/Project-66-edit'
      },
      {
        id: 4,
        title: 'ออกแบบการพัฒนาระบบสั่งซื้อและจัดการร้านบัวลอยแป๊ะอ้วน',
        description: 'ออกแบบการพัฒนาระบบสั่งซื้อและจัดการร้านบัวลอยแป๊ะอ้วนด้วย Figma',
       tags: ['Figma'],
        category: 'Design',
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #a6afff, #6b36fc)',
        demo: 'https://www.figma.com/design/hRoKob24TYpo1xt8ddDDdw/Untitled?node-id=0-1&t=Gic7pV7ISWX758JH-1 '
      }
    ],
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/poteagamer-source',
        icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
      }
    ]
  },
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    theme: { toggle: 'Switch light/dark mode' },
    navigation: { toggleMenu: 'Toggle menu' },
    hero: {
      badge: 'Still learning and improving',
      titlePrefix: 'Hello, I am',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      scrollDown: 'Scroll down'
    },
    about: {
      tag: 'About Me',
      title: 'About Me',
      experience: 'years of experience',
      downloadResume: 'Download Resume'
    },
    skills: { tag: 'Skills', title: 'Tech Stack' },
    certificatesSection: { tag: 'Certificates', title: 'Certificates & Training' },
    // FIX: renamed from `projects` to `projectsSection` (see note above).
    projectsSection: { tag: 'Projects', title: 'Projects' },
    contact: {
      tag: 'Contact',
      title: 'Get In Touch',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@email.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Message subject',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message...',
      submit: 'Send Message',
      success: '✓ Message sent successfully! Thank you for reaching out.',
      error: 'Failed to send your message. Please try again or contact me directly.'
    },
    footer: { builtWith: 'Built with HTML, CSS, JS & Vue' },
    profile: {
      name: 'Thanaphat Maneenuan',
      title: 'Learning Web Development',
      bio: 'I am a student who is still learning how to build websites and I enjoy making simple things that are easy to use.',
      location: 'Thailand',
      about: [
        'I am learning web development and I like creating things that feel simple and useful.',
        'I am still in the learning stage, but I try to work carefully and improve step by step.'
      ]
    },
    stats: [
      { value: '3+', label: 'Projects' },
      { value: '5+', label: 'Technologies' }
    ],
    highlights: [
      'Build responsive websites for every device',
      'Write clean and maintainable code',
      'Work well with teams and collaborators',
      'Keep learning new tools and technologies'
    ],
    roles: ['Full-Stack Developer', 'UI/UX Designer', 'Vue.js Specialist', 'Problem Solver'],
    skillsList: [
      { name: 'HTML / CSS', level: 80, color: '#e34c26', icon: 'H' },
      { name: 'JavaScript', level: 80, color: '#f7df1e', icon: 'JS' },
      { name: 'Vue.js', level: 70, color: '#42b883', icon: 'V' },
      { name: 'React', level: 70, color: '#61dafb', icon: 'R' },
      { name: 'Node.js', level: 70, color: '#68a063', icon: 'N' },
      { name: 'TypeScript', level: 82, color: '#3178c6', icon: 'TS' },
      { name: 'Python', level: 70, color: '#3776ab', icon: 'Py' },
      { name: 'Figma / UI Design', level: 85, color: '#f24e1e', icon: 'F' },
      { name: 'VS Code', level: 70, color: '#007acc', icon: 'VS' },
      { name: 'Oracle', level: 70, color: '#f80000', icon: 'O' },
      { name: 'Git', level: 70, color: '#f05032', icon: 'G' },
      { name: 'MySQL Workbench', level: 70, color: '#4479a1', icon: 'DB' },
      { name: 'Postman', level: 70, color: '#ff6c37', icon: 'P' },
      { name: 'PostgreSQL', level: 70, color: '#336791', icon: 'PG' },
      { name: 'MySQL', level: 70, color: '#00758f', icon: 'MY' }
    ],
    softSkillsTitle: 'Soft Skills',
    softSkills: ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability'],
    projectCategories: ['All', 'Web App', 'Design'],
    projects: [
      {
        id: 1,
        title: 'Development of an Ordering and Management System for Pae Ouan Bualoi Shop',
        description: 'Designed to bring information technology into the shop’s daily operations and solve management problems that previously lacked digital support.',
        tags: ['React.js', 'Node.js', 'TypeScript'],
        category: 'Web App',
        image: 'assets/logo.png',
        gradient: 'linear-gradient(135deg, #e6e6e6, #f3ffaf)',
        demo: 'https://pa-ouan-shop.onrender.com',
        github: 'https://github.com/poteagamer-source/pa-ouan-shop'
      },
      {
        id: 2,
        title: 'Portfolio Web app',
        description: 'Its a portfolio practice project.',
        tags: ['Vue.js', 'JavaScript', 'CSS'],
        category: 'Web App',
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #a6afff, #6b36fc)',
        demo: '#',
        github: '#'
      },
      {
        id: 3,
        title: 'Registration System for Hat Yai Technical College',
        description: 'A registration system website for Hat Yai Technical College.',
        tags: ['HTML', 'PHP', 'JavaScript', 'CSS'],
        category: 'Web App',
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #a6afff, #6b36fc)',
        demo: 'https://project-66-edit-1-3cpm.onrender.com',
        github: 'https://github.com/poteagamer-source/Project-66-edit'
      },
      {
        id: 4,
        title: 'Design Pae Ouan Bualoi Shop',
        description: 'Design Pae Ouan Bualoi Shop',
        tags: ['Figma'],
        category: 'Design',
        emoji: '📱',
        gradient: 'linear-gradient(135deg, #a6afff, #6b36fc)',
        demo: 'https://www.figma.com/design/hRoKob24TYpo1xt8ddDDdw/Untitled?node-id=0-1&t=Gic7pV7ISWX758JH-1 '
      }
    ],
    socials: [
      {
        name: 'GitHub',
        url: 'https://github.com/poteagamer-source',
        icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>'
      }
    ]
  }
};

createApp({
  setup() {
    const menuOpen = ref(false);
    const isScrolled = ref(false);
    const scrollProgress = ref(0);
    const activeSection = ref('home');
    const isDark = ref(true);
    const activeFilter = ref('ทั้งหมด');
    const typedText = ref('');
    const formSubmitting = ref(false);
    const formSuccess = ref(false);
    const currentLang = ref(localStorage.getItem('language') || 'th');
    const t = computed(() => translations[currentLang.value]);

    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const navLinks = computed(() => [
      { id: 'home', label: t.value.nav.home },
      { id: 'about', label: t.value.nav.about },
      { id: 'skills', label: t.value.nav.skills },
      { id: 'projects', label: t.value.nav.projects },
      { id: 'contact', label: t.value.nav.contact }
    ]);

    const profile = computed(() => ({
      name: t.value.profile.name,
      title: t.value.profile.title,
      bio: t.value.profile.bio,
      experience: 1,
      email: 'thanaphatmtae@gmail.com',
      location: t.value.profile.location,
      githubUrl: 'https://github.com/poteagamer-source',
      resumeUrl: './assets/resume/resume.pdf',
      about: t.value.profile.about
    }));

    const stats = computed(() => t.value.stats.map(stat => ({ ...stat })));
    const highlights = computed(() => t.value.highlights);
    const roles = computed(() => t.value.roles);
    const skills = computed(() => t.value.skillsList.map(skill => ({ ...skill })));
    const softSkills = computed(() => t.value.softSkills);
    const categories = computed(() => t.value.projectCategories);
    const projects = computed(() => t.value.projects.map(project => ({ ...project })));
    const socials = computed(() => t.value.socials.map(social => ({ ...social })));

    const filteredProjects = computed(() => {
      if (activeFilter.value === 'ทั้งหมด' || activeFilter.value === 'All') return projects.value;
      return projects.value.filter(project => project.category === activeFilter.value);
    });

    const currentYear = computed(() => new Date().getFullYear());

    function scrollTo(id) {
      menuOpen.value = false;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    function toggleTheme() {
      isDark.value = !isDark.value;
      document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light');
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    }

    function setLanguage(lang) {
      currentLang.value = lang;
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      activeFilter.value = translations[lang].projectCategories[0];
      document.title = lang === 'th'
        ? 'Portfolio | ธนภัทร มณีนวล'
        : 'Portfolio | Thanaphat Maneenuan';
    }

    function handleScroll() {
      isScrolled.value = window.scrollY > 50;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;

      const sections = navLinks.value.map(link => link.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.getBoundingClientRect().top <= 120) {
          activeSection.value = sections[i];
          break;
        }
      }
    }

    function typeWriter() {
      let roleIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function type() {
        const current = roles.value[roleIndex];
        if (isDeleting) {
          typedText.value = current.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typedText.value = current.substring(0, charIndex + 1);
          charIndex++;
        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === current.length) {
          speed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.value.length;
          speed = 500;
        }

        setTimeout(type, speed);
      }

      type();
    }

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
    const formError = ref('');

    async function submitForm() {
      formSubmitting.value = true;
      formSuccess.value = false;
      formError.value = '';

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(document.querySelector('.contact-form'))
        });

        if (res.ok) {
          formSuccess.value = true;
          form.value = { name: '', email: '', subject: '', message: '' };
        } else {
          formError.value = t.value.contact.error;
        }
      } catch {
        formError.value = t.value.contact.error;
      } finally {
        formSubmitting.value = false;
        setTimeout(() => { formSuccess.value = false; formError.value = ''; }, 4000);
      }
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        isDark.value = false;
        document.documentElement.setAttribute('data-theme', 'light');
      }

      setLanguage(currentLang.value);
      window.addEventListener('scroll', handleScroll, { passive: true });
      typeWriter();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      document.querySelectorAll('.skill-card, .project-card, .about-grid, .contact-grid').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });

      const style = document.createElement('style');
      style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
      document.head.appendChild(style);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      menuOpen,
      isScrolled,
      scrollProgress,
      activeSection,
      isDark,
      activeFilter,
      typedText,
      form,
      formSubmitting,
      formSuccess,
      formError,
      navLinks,
      profile,
      stats,
      highlights,
      skills,
      softSkills,
      categories,
      filteredProjects,
      socials,
      currentYear,
      currentLang,
      t,
      scrollTo,
      toggleTheme,
      setLanguage,
      submitForm
    };
  }
}).mount('#app');
