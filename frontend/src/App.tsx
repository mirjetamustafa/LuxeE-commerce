import Button from './components/ui/Button'

const App = () => {
  return (
    <div className="flex gap-5 p-5">
      <Button variant="primary" size="medium">
        Primary Button
      </Button>
      <Button variant="secondary" size="medium">
        Secondary Button
      </Button>
      <Button variant="default" size="large">
        Default Button
      </Button>

      <Button variant="blur" size="medium">
        Blur Button
      </Button>
      <Button variant="ghost" size="small">
        Gho
      </Button>
    </div>
  )
}

export default App
