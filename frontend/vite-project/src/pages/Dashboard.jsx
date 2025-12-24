import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Bot, Upload, FileText, Users, BarChart3, TrendingUp, Award, Clock } from 'lucide-react'

function Dashboard() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const goToUpload = () => {
    navigate('/upload')
  }

  const goToManageNotes = () => {
    navigate('/managenotes')
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const studentFeatures = [
    {
      icon: BookOpen,
      title: 'View Notes',
      description: 'Access comprehensive study materials uploaded by teachers',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      action: () => navigate('/notes')
    },
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Get instant help with your syllabus and study questions',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      action: () => alert('AI Chatbot coming soon!')
    }
  ]

  const teacherFeatures = [
    {
      icon: Upload,
      title: 'Upload Notes',
      description: 'Share your study materials with students',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      action: goToUpload
    },
    {
      icon: FileText,
      title: 'Manage Notes',
      description: 'Edit, organize, and manage your uploaded content',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-700',
      action: goToManageNotes
    }
  ]

  const adminFeatures = [
    {
      icon: Users,
      title: 'Manage Users',
      description: 'Control user accounts and permissions',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      action: () => alert('User management coming soon!')
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'View detailed platform statistics and insights',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      action: () => alert('Analytics dashboard coming soon!')
    }
  ]

  const getFeatures = () => {
    switch (user?.role) {
      case 'student':
        return studentFeatures
      case 'teacher':
        return teacherFeatures
      case 'admin':
        return adminFeatures
      default:
        return []
    }
  }

  const getRoleBadge = () => {
    const badges = {
      student: { color: 'bg-green-100 text-green-800', icon: Award },
      teacher: { color: 'bg-purple-100 text-purple-800', icon: BookOpen },
      admin: { color: 'bg-red-100 text-red-800', icon: Users }
    }
    return badges[user?.role] || badges.student
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  const features = getFeatures()
  const roleBadge = getRoleBadge()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, {user.name}! 👋
                </h1>
                <p className="text-gray-600 text-lg">
                  Ready to continue your learning journey?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${roleBadge.color}`}>
                  <roleBadge.icon className="h-4 w-4 mr-2" />
                  {user.role.toUpperCase()}
                </div>

                <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                  <Clock className="h-4 w-4 mr-2" />
                  Last login: Today
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Notes</p>
                <p className="text-2xl font-bold text-gray-900">--</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Study Streak</p>
                <p className="text-2xl font-bold text-gray-900">-- days</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-3 rounded-lg">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Achievements</p>
                <p className="text-2xl font-bold text-gray-900">--</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {user.role === 'student' ? 'Your Learning Tools' :
             user.role === 'teacher' ? 'Teaching Dashboard' : 'Admin Panel'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={feature.action}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {feature.description}
                      </p>

                      <button className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${feature.bgColor} ${feature.textColor} group-hover:shadow-md`}>
                        Get Started
                        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Welcome to CampusLearn!</p>
                <p className="text-xs text-gray-600">Account created successfully</p>
              </div>
              <span className="text-xs text-gray-500">Just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
