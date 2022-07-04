// 第三方
import { memo, Suspense } from 'react';
import { Switch, Route } from '@modern-js/runtime/router';
// import { Provider } from 'react-redux';
// 工具类
// import store from './store';
// 组件
// import AppHeader from 'components/App-header';
import TodoList from '@/pages/todoList';

export default memo(function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Suspense fallback={<div>page loading</div>}>
          <TodoList />
        </Suspense>
      </Route>
    </Switch>
  );
});
