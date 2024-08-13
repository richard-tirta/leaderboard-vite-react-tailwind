import { useCallback, useState } from 'react'
import './App.css'

type PointsModifierProps = {
  onPointsUpdate: (id: number, points: number) => void,
  id: number,
  points: number,
}


const PointsModifier = ({onPointsUpdate, id, points}: PointsModifierProps) => {
  
  const [newPoints, setNewPoints] = useState<number | string>('');

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onPointsUpdate(id, typeof newPoints === 'string' ? 0 : newPoints);
      setNewPoints('');
    },
    [id, newPoints, onPointsUpdate, points],
  );

  return (
    <>
      <div>
        <form className="flex" onSubmit={e => onSubmitHandler(e)}>
          <input type='number'
            className="dark:bg-slate-200 border-2 dark:border-0 border-slate-900 max-h-10 text-center max-w-28 dark:text-slate-900"
            placeholder="Update points"
            value={newPoints}
            onChange={e => setNewPoints(parseInt(e.target.value))}
          />
          <button type='submit' className="max-h-10">Update</button>
        </form>
      </div>
    </>
  )
}

export default PointsModifier
