import { Route, Routes } from 'react-router-dom/dist'
import { Navigate } from 'react-router-dom/dist'
import { BrowserRouter } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Todolist from '../todos/TodoList'
import Home from '../pages/Home'
import { Register } from '../pages/Register'

const AppRouter = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/todo' element={<Home />} />
				<Route path='/todo/about' element={<About />} />
				<Route path='/todo/todolist' element={<Todolist />} />
				<Route path='/todo/login' element={<Login />} />
				<Route path='/todo/singin' element={<Register />} />
				<Route path='*' element={<Error />} />
				<Route path='*' element={<Navigate to='/todo/todolist' replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRouter

