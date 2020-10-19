import { h } from "preact";
import {
  List,
  ListItemText,
  ListItem,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import GavelIcon from "@material-ui/icons/Gavel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const laws = [
  ["Когда тебя кто-то обучает нельзя огрызаться", "15 минут в углу после обеда, если обед прошел то в ту же минуту"],
  ["Можно д только раз в месяц"],
  ["Немедленный суд", "1 мороженое"],
  ["Вероника должна мыть кальян в течение часа (трубка должна продуваться)", "Лишение кальяна три дня"],
  ["Правки по закону осуществляется в воскресенье в 10:00"],
  ["Чаепитие каждый будний день утром (любое блюдо для питукстанцев)"],
  ["Решение суда можно оспорить в течение 20 минут "],
  ["Не будить питука и не трогать Веронику за голову когда будишь до 8:30", "20 минут зарядка"],
  ["Не кричать на Веронику и не повышать голос на питука", '20 минут зарядка'],
  ["С 21:00 до 8:00 режим без звука в телефоне","Без телефона одни сутки"],
  ["Не причинят телесные повреждения питукстанцу", 'Покупка то что пожелает питукстанец'],
  ["Не оскорблять честь и достоинство питукстанца и его матери", 'Питукстанец сам определяет наказание'],
  ["Не приглашать в государство других людей не обговорив это с другими питукстанцами"],
  ["Выполнять решение суда в установленные сроки",'Увеличение наказания'],
  ["Питукстанцы должны чистить зубы с 9 до 11", 'Вер: на 15 минут раньше на некст день  Влад : один раз моет посуду в этот день'],
  ["Запрещено обижаться более 1 раза в неделю"],
  ["Нельзя портить имущества", 'Возмещение убытков'],
  ["Составлять меню на следующий день", '1 час по выбору для прог или анг'],
  ["Влад готовит по пятницам!!!!!!!!!!!!!!!!!!", 'Сводить в кофе'],
];

const Header = () => (
  <Container>
    <Typography variant="h1">
      Закон питукстана <GavelIcon fontSize="large" />
    </Typography>
    <List>
      {laws.map(([description, punishment], index) => {
        return (
          <ListItem divider>
            <Accordion disabled={!punishment}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListItemText>
                  1.{index} {description}
                </ListItemText>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{punishment}</Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        );
      })}
    </List>

    <Typography variant="caption">Редакция 1.0.0</Typography>
  </Container>
);

export default Header;
