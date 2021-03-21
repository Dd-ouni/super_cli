import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElHeader,
  ElMain,
  ElFooter,
  ElContainer,
  ElSpace,
  ElTable,
  ElTableColumn,
  ElCheckbox,
  ElCheckboxGroup,
  ElPagination,
  ElRow,
  ElCol,
} from "element-plus";

export default (app) => {
  app.use(ElButton);
  app.use(ElMenu);
  app.use(ElMenuItem);
  app.use(ElSubmenu);
  app.use(ElHeader);
  app.use(ElMain);
  app.use(ElFooter);
  app.use(ElContainer);
  app.use(ElSpace);
  app.use(ElTable);
  app.use(ElTableColumn);
  app.use(ElCheckbox);
  app.use(ElCheckboxGroup);
  app.component(ElPagination.name, ElPagination);
  app.use(ElRow);
  app.use(ElCol);
};
