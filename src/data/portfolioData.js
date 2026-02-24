export const personalInfo = {
  name: 'Abderrahmane Lahrichi',
  location: 'Bellevue, WA',
  email: 'a.lahrichi224@gmail.com',
  phone: '(425) 435-9217',
  linkedin: 'https://www.linkedin.com/in/abderrahmane-lahrichi/',
  github: 'https://github.com/AbderrahmaneLahrichi'
}

export const experiences = [
  {
    id: 1,
    title: 'Security and Compliance Engineer',
    company: 'Microsoft',
    location: 'Bellevue, WA',
    period: 'September 2024 - Present',
    summary: 'Operating at the intersection of security engineering and compliance in a regulated enterprise environment — translating policy requirements into operational controls.',
    responsibilities: [
      'Administered Microsoft Purview compliance policies across enterprise customer environments, including data governance and access controls',
      'Drove incident response and root cause analysis for complex security failures across Microsoft 365 environments',
      'Partnered with cross-functional teams to translate emerging threats into M365 security policy updates',
      'Delivered compliance posture assessments and risk recommendations to technical teams and executive leadership'
    ],
    technicalSkills: ['Microsoft Purview', 'Microsoft Entra ID', 'Azure AD', 'Conditional Access', 'MFA', 'PowerShell', 'ServiceNow', 'Splunk'],
    softSkills: ['Cross-functional Communication', 'Stakeholder Reporting', 'Policy Interpretation', 'Incident Leadership'],
    frameworks: ['FedRAMP', 'NIST 800-53'],
    frameworkNote: null
  },
  {
    id: 2,
    title: 'Endpoint Security Engineer',
    company: 'Microsoft',
    location: 'Bellevue, WA',
    period: 'December 2023 - September 2024',
    summary: 'Owned advanced escalation management across 300+ enterprise deployments, resolving complex endpoint failures through cross-team coordination and deep analysis.',
    responsibilities: [
      'Managed end-to-end Tier 2/3 escalations across 300+ enterprise Microsoft 365 deployments while maintaining SLA compliance',
      'Coordinated with engineering, networking, and security teams to resolve root causes within M365 and endpoint environments',
      'Investigated complex endpoint failures through telemetry, log analysis, and cross-system correlation',
      'Built internal documentation that reduced repeat escalations and accelerated resolution across the team'
    ],
    technicalSkills: ['Microsoft Defender for Endpoint', 'Microsoft 365', 'SCCM/MECM', 'Intune', 'Wireshark', 'Windows Event Logs', 'PowerShell'],
    softSkills: ['Escalation Management', 'Technical Documentation', 'Problem Solving', 'Team Coordination'],
    frameworks: [],
    frameworkNote: null
  },
  {
    id: 3,
    title: 'IT Support Lead',
    company: 'Bellevue College',
    location: 'Bellevue, WA',
    period: 'December 2018 - December 2023',
    summary: 'Led IT support operations across an academic environment, supervising frontline staff and coordinating service delivery, hardware lifecycle, and institutional compliance.',
    responsibilities: [
      'Supervised lab assistants and Tier 1/2 support staff, setting direction on daily operations and escalation workflows',
      'Served as the primary escalation point between frontline staff and senior IT administration',
      'Coordinated hardware lifecycle and surplus inventory processes across multiple departments',
      'Ensured staff adherence to institutional access control and data compliance standards'
    ],
    technicalSkills: ['Active Directory', 'SCCM', 'Group Policy', 'WSUS', 'Windows Desktop & Server', 'DHCP', 'DNS'],
    softSkills: ['Team Supervision', 'Operational Coordination', 'Knowledge Transfer', 'Compliance Oversight'],
    frameworks: ['HIPAA', 'FERPA'],
    frameworkNote: null
  }
]

export const skillCategories = [
  {
    id: 1,
    name: 'Security & Compliance',
    skills: [
      'Security Policy Enforcement',
      'Incident Response',
      'Root Cause Analysis',
      'Vulnerability Assessment',
      'Threat Analysis',
      'Security Auditing',
      'Risk Management'
    ]
  },
  {
    id: 2,
    name: 'Compliance Frameworks',
    skills: ['FedRAMP', 'NIST 800-53', 'HIPAA', 'FERPA', 'SOC 2', 'ISO 27001', 'ITIL']
  },
  {
    id: 3,
    name: 'Endpoint & Device Management',
    skills: ['Microsoft Defender for Endpoint', 'SCCM/MECM', 'Microsoft Intune', 'WSUS', 'Group Policy', 'Device Imaging', 'Patch Management']
  },
  {
    id: 4,
    name: 'Identity & Access Management',
    skills: ['Active Directory', 'Microsoft Entra ID', 'Conditional Access', 'MFA', 'RBAC', 'NTFS Permissions', 'SSO']
  },
  {
    id: 5,
    name: 'Networking',
    skills: ['TCP/IP', 'DNS', 'DHCP', 'Wireshark', 'VPN', 'Firewall Configuration', 'Network Troubleshooting']
  },
  {
    id: 6,
    name: 'Scripting & Automation',
    skills: ['PowerShell', 'Python', 'Bash', 'Task Automation', 'Scheduled Jobs']
  },
  {
    id: 7,
    name: 'Tools & Platforms',
    skills: ['ServiceNow', 'Splunk', 'Azure Portal', 'Microsoft 365 Admin', 'Windows Event Logs', 'Remote Desktop']
  },
  {
    id: 8,
    name: 'Operating Systems',
    skills: ['Windows Desktop', 'Windows Server', 'macOS', 'Linux']
  },
  {
    id: 9,
    name: 'Professional Skills',
    skills: ['Cross-functional Communication', 'Stakeholder Reporting', 'Technical Documentation', 'Escalation Management', 'Knowledge Transfer', 'Customer Service']
  }
]

export const projects = [
  {
    id: 1,
    title: 'Blackjack Game',
    description: 'A player vs. computer blackjack game built with a standard 52 card deck. Features card shuffling, hit/stand mechanics, and dealer AI that plays by standard casino rules.',
    technologies: ['Python', 'Pygame'],
    github: 'https://github.com/AbderrahmaneLahrichi/Blackjack_Game'
  },
  {
    id: 2,
    title: 'Tic Tac Toe',
    description: 'A two-player tic tac toe game with a visual interface. Players take turns clicking to place X or O, with win detection and tie announcements.',
    technologies: ['Python', 'Pygame'],
    github: 'https://github.com/AbderrahmaneLahrichi/Tic_Tac_Toe-Game'
  }
]

export const learningItems = [
  {
    id: 1,
    title: 'AZ-900: Azure Fundamentals',
    progress: 96,
    status: 'in-progress',
    completedDate: null,
    description: 'Microsoft Azure cloud fundamentals covering core services, security, privacy, compliance, and pricing.'
  },
  {
    id: 2,
    title: 'CompTIA Security+ (SY0-701)',
    progress: 80,
    status: 'in-progress',
    completedDate: null,
    description: 'Comprehensive security certification covering threats, architecture, operations, and incident response.'
  }
]
