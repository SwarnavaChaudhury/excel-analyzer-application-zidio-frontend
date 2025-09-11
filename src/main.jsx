import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/pages/Login.jsx'
import AppLayout from './AppLayout.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import FileHistory from './components/pages/FileHistory.jsx'
import ChartVisualisation from './components/pages/ChartVisualisation.jsx'
import AIInsights from './components/pages/AIInsights.jsx'
import AccountSettings from './components/pages/AccountSettings.jsx'
import UploadFiles from './components/pages/UploadFiles.jsx'
import CreateNewChart from './components/pages/CreateNewChart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />

      <Route element={<AppLayout />}>

        <Route path='/user-dashboard' element={<Dashboard />} />

        <Route path='/user-dashboard'>
          <Route path='upload-files' element={<UploadFiles />} />
          <Route path='file-history' element={<FileHistory />} />
          <Route path='chart-visualisations' element={<ChartVisualisation />} />
          <Route path='create-new-chart' element={<CreateNewChart />} />
          <Route path='ai-insights' element={<AIInsights />} />
          <Route path='account-settings' element={<AccountSettings />} />
        </Route>

      </Route>

    </Routes>
  </BrowserRouter>
)