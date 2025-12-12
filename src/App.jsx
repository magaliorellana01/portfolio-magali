import React, { useState, useMemo } from 'react';
import { 
  createTheme, ThemeProvider, CssBaseline, Container, Typography, Box, Grid, 
  Card, CardMedia, CardContent, CardActions, Button, Chip, AppBar, Toolbar, 
  IconButton, Avatar, Paper, Dialog, DialogTitle, DialogContent
} from '@mui/material';
import { 
  DarkMode, LightMode, AutoAwesome, School,
  Close, OpenInNew, ArrowDownward, WorkspacePremium, Class, Download
} from '@mui/icons-material';

// --- ÍCONOS REALES ---
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { 
  SiReact, SiJavascript, SiNodedotjs, SiMongodb, 
  SiMui, SiGit, SiGithub, SiHtml5, SiBootstrap, SiPython 
} from 'react-icons/si'; 

// --- DATOS DEL PORTFOLIO ---
const portfolioData = {
  name: "Magalí Orellana",
  title: "Full Stack Developer",
  bio: "Soy Técnica Universitaria en Programación recibida en la Universidad Nacional de Hurlingham. Me apasiona transformar ideas complejas en código limpio y funcional. Encuentro el equilibrio perfecto entre el diseño visual y la lógica del servidor, buscando siempre aprender nuevas tecnologías para llevar mis proyectos al siguiente nivel.",
  social: {
    github: "https://github.com/magaliorellana01", 
    linkedin: "https://www.linkedin.com/in/magali-orellana-858543217/",
    email: "mailto:magaliorellana01@gmail.com"
  },
  skills: [
    { name: "JavaScript", icon: <SiJavascript size="1.7em" /> },
    { name: "Python", icon: <SiPython size="1.7em" /> },
    { name: "React", icon: <SiReact size="1.7em" /> },
    { name: "Node.js", icon: <SiNodedotjs size="1.7em" /> },
    { name: "MongoDB", icon: <SiMongodb size="1.7em" /> },
    { name: "Material UI", icon: <SiMui size="1.7em" /> },
    { name: "Bootstrap", icon: <SiBootstrap size="1.7em" /> }, 
    { name: "Git", icon: <SiGit size="1.7em" /> },       
    { name: "GitHub", icon: <SiGithub size="1.7em" /> }, 
    { name: "HTML & CSS", icon: <SiHtml5 size="1.7em" /> }
  ],
  degrees: [
    {
      title: "Tecnicatura Universitaria en Programación",
      place: "Universidad Nacional de Hurlingham",
      year: "2021 - 2025",
      icon: <School fontSize="large" /> 
    }
  ],
  certifications: [
    {
      title: "Desarrollo Web",
      place: "Coderhouse",
      status: "Certificado",
      year: "2023",
      icon: <WorkspacePremium fontSize="medium" />,
      image: "/certificado-coder.png" 
    },
    {
      title: "Diseño Gráfico",
      place: "Loopian",
      status: "Certificado",
      year: "2022",
      icon: <WorkspacePremium fontSize="medium" />,
      image: "/curso-loopian.png"
    },
    {
      title: "Curso de React",
      place: "Talento Tech",
      status: "En curso / Certif. en trámite",
      year: "2025",
      icon: <Class fontSize="medium" />
    }
  ],
  projects: [
    {
      title: "Medicina Integral",
      desc: "Sistema de gestión clínica completo. Dashboard, Turnos y Pacientes.",
      tags: ["React", "Node.js", "MongoDB", "MUI"],
      cover: "/medicina-integral-bandeja.png", 
      gallery: [
        "/medicina-integral-dashboard.png", 
        "/medicina-integral-modal.png", 
        "/medicina-integral-turnos.png"
      ],
      repo: "https://github.com/magaliorellana01/AppPrestadoresMedicos", 
      demo: "https://appprestadoresmedicos.onrender.com"
    },
    {
      title: "AlojAndo",
      desc: "Clon de Airbnb. Búsqueda de alojamientos con mapas interactivos.",
      tags: ["React", "Leaflet Maps", "UX/UI"],
      cover: "/alojando-home.png",
      gallery: [
        "/alojando-detalle.png", 
        "/alojando-map.png", 
        "/alojando-calculo.png"
      ],
      repo: "https://github.com/magaliorellana01/alojando", 
      demo: "https://alojando.vercel.app"
    },
    {
      title: "Bohemia Velas",
      desc: "E-commerce artesanal con panel de administración y carrito.",
      tags: ["React", "Context API", "CRUD"],
      cover: "/e-commerce-home.png",
      gallery: [
        "/e-commerce-productos.png", 
        "/e-commerce-carrito.png", 
        "/e-commerce-admin.png"
      ],
      repo: "https://github.com/magaliorellana01/proyecto-final-25235-MagaliOrellana", 
      demo: "https://proyecto-final-25235-magali-orellan.vercel.app"
    }
  ]
};

export default function Portfolio() {
  const [mode, setMode] = useState('dark');
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openCertModal, setOpenCertModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [openDegreeModal, setOpenDegreeModal] = useState(false);

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: mode === 'light' ? '#8e24aa' : '#e1bee7' }, 
      background: {
        default: mode === 'light' ? '#ffffff' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#2c2c2c' : '#f3e5f5',
        secondary: mode === 'light' ? '#555555' : '#b0b0b0',
      }
    },
    typography: {
      fontFamily: "'Lato', sans-serif",
      h1: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '3.5rem' },
      h3: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: '2.2rem' },
      h5: { fontWeight: 600, fontSize: '1.4rem' },
      h6: { fontWeight: 600, fontSize: '1.2rem' },
      body1: { fontSize: '1.1rem', lineHeight: 1.7 },
      body2: { fontSize: '1rem', lineHeight: 1.6 },
      button: { textTransform: 'none', fontWeight: 600, fontSize: '1rem' }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: mode === 'light' ? '0 4px 20px rgba(0,0,0,0.05)' : '0 4px 20px rgba(0,0,0,0.4)',
            border: 'none'
          }
        }
      }
    }
  }), [mode]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleOpenCert = (cert) => {
    if (cert.image) {
      setSelectedCert(cert);
      setOpenCertModal(true);
    }
  };

  const handleOpenDegree = () => setOpenDegreeModal(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');`}</style>

      {/* NAVBAR */}
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ 
        backdropFilter: 'blur(10px)', 
        bgcolor: mode === 'light' ? 'rgba(255,255,255,0.5)' : 'rgba(18,18,18,0.5)',
        display: 'flex', justifyContent: 'center', height: '70px'
      }}>
        <Toolbar sx={{ justifyContent: 'space-between', width: '100%', maxWidth: 'lg', mx: 'auto', px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AutoAwesome sx={{ mr: 1, color: 'primary.main', fontSize: '1.5rem' }} />
            <Typography variant="h6" sx={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem' }}>
              Magalí Orellana
            </Typography>
          </Box>
          <IconButton onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} color="primary">
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 1. HERO SECTION */}
      <Box sx={{ 
        width: '100%', 
        minHeight: '75vh', 
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        background: mode === 'light'
          ? 'radial-gradient(circle at 50% 50%, #f3e5f5 0%, #fff 70%), linear-gradient(45deg, #e1bee7 0%, #fff 100%)'
          : 'radial-gradient(circle at 50% 50%, #2c1a35 0%, #121212 70%)',
        pt: 10, pb: 5
      }}>
        <Avatar 
          src="/foto-perfil.jpg" 
          sx={{ 
            width: 170, height: 170, mb: 3, 
            border: `5px solid ${theme.palette.background.paper}`,
            boxShadow: '0 8px 30px rgba(142, 36, 170, 0.25)'
          }}
        />
        <Typography variant="body1" color="primary.main" gutterBottom sx={{ letterSpacing: 2, fontWeight: 'bold', fontSize: '1.1rem' }}>
          HOLA, SOY MAGALÍ
        </Typography>
        <Typography variant="h1" sx={{ mb: 3, maxWidth: '900px', lineHeight: 1.1, px: 2 }}>
          {portfolioData.title}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
           <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
             <Button variant="contained" size="large" startIcon={<FaLinkedin />} href={portfolioData.social.linkedin} target="_blank" sx={{ borderRadius: '50px', px: 4, py: 1.2 }}>
               LinkedIn
             </Button>
             <Button variant="outlined" size="large" startIcon={<FaGithub />} href={portfolioData.social.github} target="_blank" sx={{ borderRadius: '50px', px: 4, py: 1.2, borderWidth: 2 }}>
               GitHub
             </Button>
             <Button variant="outlined" size="large" startIcon={<ArrowDownward />} href="#proyectos" sx={{ borderRadius: '50px', px: 4, py: 1.2, borderWidth: 2 }}>
               Proyectos
             </Button>
           </Box>
           <Button variant="outlined" size="large" startIcon={<Download />} href="/CvMagalíOrellana.pdf" download sx={{ borderRadius: '50px', px: 4, py: 1.2, borderWidth: 2, mt: 2 }}>
             Descargá mi CV
           </Button>
        </Box>
      </Box>

      {/* CONTENEDOR PRINCIPAL */}
      <Container maxWidth="lg" sx={{ 
        display: 'flex', flexDirection: 'column', alignItems: 'center', py: 8
      }}>

        {/* 2. ABOUT ME */}
        <Box sx={{ textAlign: 'center', maxWidth: '800px', width: '100%', mb: 12 }}>
          <Typography variant="h3" gutterBottom>Sobre Mí</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
            {portfolioData.bio}
          </Typography>
        </Box>

        {/* 3. SKILLS */}
        <Box sx={{ textAlign: 'center', maxWidth: '1000px', width: '100%', mb: 15 }}>
          <Typography variant="h3" gutterBottom sx={{ mb: 6 }}>Skills</Typography>
          <Grid container spacing={3} justifyContent="center">
            {portfolioData.skills.map((skill, index) => (
              <Grid item key={index}>
                <Paper elevation={0} sx={{ 
                  py: 1, px: 2.5, 
                  borderRadius: 50, 
                  display: 'flex', alignItems: 'center', gap: 0.8,
                  border: `1px solid ${theme.palette.divider}`,
                  bgcolor: theme.palette.background.paper,
                  transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', borderColor: theme.palette.primary.main }
                }}>
                  <Box sx={{ color: 'primary.main', display: 'flex', fontSize: '1.3em' }}>{skill.icon}</Box>
                  <Typography fontWeight="bold" sx={{ fontSize: '0.95rem' }}>{skill.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 4. PROYECTOS */}
        <Box id="proyectos" sx={{ width: '100%', scrollMarginTop: '100px', mb: 15 }}>
          <Typography variant="h3" sx={{ mb: 8, textAlign: 'center' }}>Proyectos</Typography>
          
          <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%' }}>
            <Grid container spacing={5} justifyContent="center" alignItems="stretch">
              {portfolioData.projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card sx={{ 
                    width: '100%', 
                    maxWidth: 340,
                    height: '100%',    
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.32)'
                    }
                  }}>
                    <Box>
                      <CardMedia
                          component="img"
                          height="130" 
                          image={project.cover}
                          alt={project.title}
                          sx={{ cursor: 'pointer', objectFit: 'cover' }}
                          onClick={() => handleOpenProject(project)}
                      />
                      <CardContent sx={{ pb: 3 }}>
                          <Typography variant="h5" gutterBottom>{project.title}</Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{project.desc}</Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {project.tags.map(tag => (
                              <Chip key={tag} label={tag} size="small" variant="outlined" color="primary" sx={{ borderRadius: 1 }} />
                            ))}
                          </Box>




                      </CardContent>
                    </Box>
                    <CardActions sx={{ justifyContent: 'center', pb: 3, mt: 1 }}>
                      <Button variant="contained" size="medium" onClick={() => handleOpenProject(project)} sx={{ borderRadius: '50px', px: 3 }}>
                        Ver detalles
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* 5. EDUCACIÓN */}
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ mb: 6 }}>Formación</Typography>
          
          <Box sx={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            
            {/* TÍTULO UNIVERSITARIO */}
            <Paper 
              onClick={handleOpenDegree}
              sx={{ 
                p: 2.5, borderRadius: 6, textAlign: 'center', width: '100%', maxWidth: '550px', mx: 'auto',
                bgcolor: mode === 'light' ? '#f3e5f5' : '#2c1a35', 
                border: `1px solid ${theme.palette.primary.main}`, 
                cursor: 'pointer',
                transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.01)' }
              }} 
              elevation={2}
            >
                 <Box sx={{ color: 'primary.main', mb: 2 }}>{portfolioData.degrees[0].icon}</Box>
                 <Typography variant="h5" fontWeight="bold" gutterBottom>{portfolioData.degrees[0].title}</Typography>
                 <Typography variant="body1" color="text.secondary">{portfolioData.degrees[0].place}</Typography>
                 <Typography variant="body1" sx={{ mt: 1, fontWeight: 'bold' }}>{portfolioData.degrees[0].year}</Typography>
                 <Typography variant="caption" sx={{ mt: 2, opacity: 0.6, fontSize: '0.8rem' }}>
                   (Ver promedio académico)
                 </Typography>
            </Paper>

            {/* CURSOS Y CERTIFICACIONES */}
            <Typography variant="h6" sx={{ mt: 2, mb: 1, textAlign: 'center', opacity: 0.8, textTransform: 'uppercase', letterSpacing: 1.5 }}>
              Cursos Complementarios
            </Typography>
            
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, width: '100%' }}>
              {portfolioData.certifications.map((cert, index) => (
                <Paper 
                  key={index} 
                  onClick={() => handleOpenCert(cert)}
                  sx={{ 
                    p: 3, borderRadius: 6, textAlign: 'center', flex: 1, 
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    bgcolor: mode === 'light' ? '#fff' : '#1e1e1e',
                    border: `1px solid ${theme.palette.divider}`,
                    cursor: cert.image ? 'pointer' : 'default',
                    transition: 'all 0.3s',
                    '&:hover': { 
                      transform: 'translateY(-5px)', 
                      borderColor: theme.palette.primary.main, 
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)' 
                    }
                  }} 
                  elevation={0}
                >
                   <Box sx={{ color: 'primary.main', mb: 1.5 }}>{cert.icon}</Box>
                   <Typography variant="h6" fontWeight="bold">{cert.title}</Typography>
                   <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{cert.place}</Typography>
                   <Chip label={cert.status} size="medium" color={cert.status.includes("Certificado") ? "primary" : "warning"} variant="outlined" sx={{ mt: 2 }} />
                   
                   {/* Texto solo si hay imagen */}
                   {cert.image && (
                     <Typography variant="caption" sx={{ mt: 2, opacity: 0.6, fontSize: '0.8rem' }}>
                       (Ver Certificado)
                     </Typography>
                   )}
                </Paper>
              ))}
            </Box>

          </Box>
        </Box>

      </Container>

      {/* FOOTER */}
      <Box sx={{ py: 6, textAlign: 'center', borderTop: `1px solid ${theme.palette.divider}`, bgcolor: theme.palette.background.paper, mt: 8 }}>
        <Typography variant="body2" color="text.secondary">
           Montserrat Magalí Orellana 💜
        </Typography>
      </Box>

      {/* MODAL PROYECTOS */}
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="md" fullWidth>
        {selectedProject && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 'bold' }}>
                {selectedProject.title}
              </Typography>
              <IconButton onClick={() => setOpenModal(false)}><Close /></IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography paragraph color="text.secondary" sx={{ mb: 4, fontSize: '1rem' }}>{selectedProject.desc}</Typography>

              {selectedProject.title === 'Medicina Integral' && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Credenciales de prueba</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', mb: 0.5 }}>
                    Centro médico: <strong>22222222222</strong> — contraseña: <strong>123</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', mb: 1.5 }}>
                    Médico: <strong>11111111111</strong> — contraseña: <strong>123</strong>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Diferencias entre Centro médico y Médico</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    Hay dos diferencias principales entre los roles:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                    1) Cuando un <strong>Centro médico</strong> inicia sesión, puede acceder a las solicitudes tomadas por sus médicos y cambiar el estado de esas solicitudes.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                    2) Un <strong>Médico</strong> solo puede ver y gestionar sus propias solicitudes; no puede cambiar el estado de solicitudes de otros médicos ni ver las listas completas del centro.
                  </Typography>
                </Box>
              )}

              {selectedProject.title === 'Bohemia Velas' && (
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Credenciales de prueba</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', mb: 1.5 }}>
                    Admin: <strong>admin@velas.com</strong> — contraseña: <strong>123456</strong>
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Acciones de administrador</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                    Al iniciar sesión como administrador se habilita un botón en el panel donde se pueden <strong>agregar</strong>, <strong>editar</strong> y <strong>borrar</strong> productos de la tienda.
                  </Typography>
                </Box>
              )}

              <Grid container spacing={3} justifyContent="center">
                {[selectedProject.cover, ...selectedProject.gallery].map((img, idx) => (
                  <Grid item xs={12} sm={6} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={img} alt={`Captura ${idx}`} style={{ width: '100%', borderRadius: 12, border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  </Grid>
                ))}
              </Grid>
            </DialogContent>
            
            <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
               <Button variant="outlined" size="large" startIcon={<FaGithub />} href={selectedProject.repo} target="_blank" sx={{ borderRadius: '50px' }}>Ver Código</Button>
               <Button variant="contained" size="large" startIcon={<OpenInNew />} href={selectedProject.demo} target="_blank" sx={{ borderRadius: '50px' }}>Ver Demo</Button>
            </Box>
          </>
        )}
      </Dialog>

      {/* MODAL CERTIFICADOS */}
      <Dialog open={openCertModal} onClose={() => setOpenCertModal(false)} maxWidth="md" fullWidth>
        {selectedCert && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {selectedCert.title} - {selectedCert.place}
              </Typography>
              <IconButton onClick={() => setOpenCertModal(false)}><Close /></IconButton>
            </DialogTitle>
            <DialogContent dividers sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
              <img 
                src={selectedCert.image} 
                alt="Certificado" 
                style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }} 
              />
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* MODAL PARA PROMEDIO ACADÉMICO */}
      <Dialog open={openDegreeModal} onClose={() => setOpenDegreeModal(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Promedio Académico
          </Typography>
          <IconButton onClick={() => setOpenDegreeModal(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
          <img 
            src="/promedio-academico.png" 
            alt="Promedio Académico" 
            style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }} 
          />
        </DialogContent>
      </Dialog>

    </ThemeProvider>
  );
}