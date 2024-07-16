function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('Componente iniciado')
    async function fetchData() {
      const response = await getUsers()
      setUsers(response)
    }
    
    fetchData()
  }, [])


  return (
    <>
      {users.map(
        user => <span key={user.id}>{user.name} ({user.email})</span>
      )}
    </>
  )
}

export default App
