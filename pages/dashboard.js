import Button from './../components/ui/Button';

export default function Dashboard () {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Button>😎 Create Room</Button>
        <Button outlined={true} to="/settings">⚙ <span className="sr-only">Settings</span></Button>
      </div>
    </div>
  )
}