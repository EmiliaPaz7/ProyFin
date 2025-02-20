import React from 'react';
import BuyCard from "./BuyCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link as Scrollcd } from 'react-scroll';
import { AppBar, IconButton, Toolbar, CssBaseline, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Title from '../Typography/Title';

function Landing() {
  let navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const noticiaDescripcionLarga = `El 26 de septiembre de 2024, el Colegio Bernabé de Larraul celebró el solemne acto de Juramento a la Bandera, en el que se proclamaron a los nuevos abanderados y escoltas del centro educativo. La ceremonia, llena de emoción y patriotismo, contó con la participación de estudiantes, docentes y autoridades locales.
  
  En esta significativa jornada, Angely Flores fue proclamada como la Abanderada de la Institución, mientras que Dileidy Portilla recibió el honor de ser la Abanderada del Cantón. Por su parte, el estudiante Michael Ortega fue elegido como el Abanderado del Colegio.

  Los nuevos abanderados y escoltas realizaron su juramento con gran solemnidad, reafirmando su compromiso con los valores patrios y su responsabilidad al representar a la comunidad educativa. La directora del colegio, junto con los profesores, destacó la importancia de este acto como parte esencial de la formación cívica y ética de los estudiantes.

  Este evento, que reflejó el espíritu de unidad y respeto por la patria, dejó una huella imborrable en todos los presentes, quienes acompañaron a los jóvenes abanderados en su importante compromiso para el año escolar.`;

  const noticiaDescripcion2 = `El Colegio Bernabé de Larraul llevó a cabo su tan esperada Casa Abierta, un evento que reunió a estudiantes, familias y visitantes interesados en conocer de cerca los proyectos educativos que se desarrollan en el centro. 
  La jornada estuvo llena de actividades interactivas y stands informativos que permitieron explorar diversas áreas del conocimiento, como Inglés, Programación, Ciencias y mucho más.`;

  const noticiaDescripcion3 = `El equipo masculino de tercero uno de bachillerato logró una destacada participación en los campeonatos del colegio, ganando así el primer lugar y dejando al equipo de tercero dos en segundo lugar. 
  Las chicas de décimo también se destacaron con sus grandes habilidades en el indor, quedando en el primer lugar de los equipos femeninos y dejando al equipo de segundo de bachillerato en el segundo puesto.

  En el primer lugar de los equipos masculinos, tercero uno se destacó con 18 puntos, mientras que el segundo puesto fue ocupado por tercero dos con 10 puntos. Por otro lado, las chicas de décimo ocuparon el primer lugar con 12 puntos, mientras que el equipo de segundo de bachillerato obtuvo 9 puntos.

  Los ganadores y los equipos que ocuparon los primeros lugares recibieron un reconocimiento frente a todos los estudiantes de la institución. Los premios fueron entregados por los docentes y parte del consejo estudiantil, durante una emotiva ceremonia de premiación.

  Estos juegos ayudaron a los jóvenes a entender la importancia del trabajo en equipo y mejorar su comunicación. Los docentes garantizaron que todas las reglas se cumplieran adecuadamente y sin violencia, logrando así uno de los mejores campeonatos del colegio y el último de tercero de bachillerato.`;

  const paseoEscolarDescripcion = `Por los 60 años de Fe y Alegría, los estudiantes del 3º de Bachillerato realizaron un enriquecedor paseo escolar a la Reserva Intillacta, ubicada en la provincia de Pichincha, Ecuador, para conmemorar los 60 años de la Fundación Fe y Alegría. Esta salida educativa fue una oportunidad única para aprender sobre la biodiversidad de la región y la importancia de su preservación. Durante la visita, los estudiantes tuvieron la oportunidad de explorar la rica flora de la reserva, donde conocieron diversas plantas comestibles autóctonas, tales como frutos locales y hierbas medicinales, que han sido parte fundamental de la cultura y alimentación de las comunidades de la zona.`;

  const kind = [
    {
      title: 'Paseo Escolar a la Reserva Intillacta(29-JUL-2024)',
      description: paseoEscolarDescripcion,
      imageUrl: "https://i.ibb.co/nNKv32pL/Whats-App-Image-2025-02-19-at-9-28-51-PM.jpg",
      time: 1500,
    },
    {
      title: 'CASA ABIERTA (07-FEB-2025)',
      description: noticiaDescripcion2,
      imageUrl: "https://i.ibb.co/HfmWFpTZ/Whats-App-Image-2025-02-19-at-11-06-19-PM.jpg",
      time: 1500,
    },
    {
      title: 'FINAL DE CAMPEONATO DE DEPORTES (06-DIC-24)',
      description: noticiaDescripcion3,
      imageUrl: "https://i.ibb.co/kgq6NYLj/Whats-App-Image-2025-02-18-at-9-25-19-PM.jpg",
      time: 1500,
    },
    {
      title: 'PROCLAMACION DE ABANDERADOS Y ESCOLTAS (26-sep-2024)',
      description: noticiaDescripcionLarga,
      imageUrl: "https://i.ibb.co/LXvCNhVk/Whats-App-Image-2025-02-18-at-9-23-41-PM.jpg",
      time: 1500,
    },
  ];

  const eventos = [
    {
      title: 'VACACIONES POR EL FERIADO DE DIFUNTOS',
      date: '2-6 de noviembre, 2025',
      description: 'Tiempo de descanso por el feriado de Difuntos.',
    },
    {
      title: 'VACACIONES POR EL FERIADO DE NAVIDAD Y AÑO NUEVO',
      date: '20 de diciembre, 2025 - 6 de enero, 2026',
      description: 'Vacaciones por las festividades de Navidad y Año Nuevo.',
    },
    {
      title: 'VACACIONES POR CARNAVAL',
      date: '15-18 de febrero, 2026',
      description: 'Vacaciones durante la festividad de Carnaval.',
    },
    {
      title: 'REUNION DE PADRES DE FAMILIA',
      date: '10 de marzo, 2025',
      description: 'Reunión para actualizar a los padres sobre el progreso escolar.',
    },
    {
      title: 'CRONOGRAMA DE GRADUACIÓN 3RO DE BACHILLERATO',
      date: '25 de junio, 2025',
      description: 'Entrega del cronograma de graduación para el tercer año de bachillerato.',
    },
  {
    title: 'hola',
    date: '25 de junio, 2025',
    description: 'Entrega del cronograma de graduación para el tercer año de bachillerato.',
  },
          

  ];

  const avisosImportantes = [
    {
      title: 'Invitación al Campeonato de Deportes',
      description: '¡Te invitamos al Campeonato de Deportes para disfrutar de la emoción y la competencia!',
      imageUrl: 'https://i.ibb.co/zVyhmG1g/Whats-App-Image-2025-02-19-at-11-35-55-PM.jpg',
    },
    {
      title: 'Invitación al Simulacro en Caso de Inundación”',
      description: 'No faltes a la ceremonia solemne para el juramento de la bandera y la proclamación de los abanderados.',
      imageUrl: 'https://i.ibb.co/dJrcJY1c/Whats-App-Image-2025-02-19-at-11-38-13-PM-1.jpg',
    },
    {
      title: 'Invitación al Concurso “Pinta tu Parroquia”',
      description: 'Participa en el concurso de pintura para representar tu parroquia en las festividades del colegio.',
      imageUrl: 'https://i.ibb.co/Z9WdF72/Whats-App-Image-2025-02-19-at-11-37-01-PM-1.jpg',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#87CEFB' }}>
      <CssBaseline />
      <motion.div
        id="header"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Futura' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AppBar style={{ background: 'none' }} elevation={0}>
          <Toolbar style={{ width: '80%', margin: '0 auto' }}>
            <h1 style={{ flexGrow: '1', fontSize: '2.6rem', color: '#fff' }}>Noticias</h1>
          </Toolbar>
        </AppBar>

        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}>
          <h1 style={{ fontSize: '4.5rem', color: '#000', marginRight: '1rem' }}>
            Página Web de Noticias Colegio Bernabé de Larraul <br />
          </h1>
          <img
            src="https://i.ibb.co/qYDdnTVp/Whats-App-Image-2025-02-19-at-10-52-37-PM.jpg"
            alt="Imagen de la noticia"
            style={{ height: '80px', width: 'auto' }}
          />
        </div>

        <Scroll to="newsSection" smooth={true}>
          <IconButton>
            <ExpandMoreIcon style={{ color: '#b5efff', fontSize: '4rem' }} />
          </IconButton>
        </Scroll>
      </motion.div>

      {/* Sección de noticias con 2 columnas por fila */}
      <div
        id="newsSection"
        style={{ maxWidth: '90%', margin: '0 auto', padding: '2rem 0', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}
      >
        {kind.map((item, index) => (
          <motion.div
            key={index}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <BuyCard kind={item} />
          </motion.div>
        ))}
      </div>

      {/* Sección de Eventos */}
      <Box id="eventsSection" sx={{ padding: '2rem', backgroundColor: '#f4f4f4' }}>
        <Typography variant="h4" align="center" gutterBottom>Eventos</Typography>
        {eventos.map((evento, index) => (
          <Accordion key={index} sx={{ marginBottom: '1rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-evento-${index}-content`}
              id={`panel-evento-${index}-header`}
            >
              <Typography variant="h6">{evento.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle1" color="textSecondary">Fecha: {evento.date}</Typography>
              <Typography variant="body1">{evento.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Sección de Avisos Importantes con Accordion */}
      <Box id="importantAlertsSection" sx={{ padding: '2rem', backgroundColor: '#fff' }}>
        <Typography variant="h4" align="center" gutterBottom>Avisos Importantes</Typography>
        {avisosImportantes.map((aviso, index) => (
          <Accordion key={index} sx={{ marginBottom: '1rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography variant="h6">{aviso.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ marginBottom: '1rem' }}>{aviso.description}</Typography>
              <img src={aviso.imageUrl} alt={`Imagen de ${aviso.title}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
        <IconButton onClick={goToLogin}>
          <ExitToAppIcon style={{ color: '#fff' }} />
        </IconButton>
        <p>&copy; 2025 Noticias Bernabé de Larraul</p>
      </footer>
    </div>
  );
}

export default Landing;



