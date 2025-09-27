import React from "react";

export default function TaskStatus({ tasks, onComplete, resolved }) {
  return (
    <div className="card bg-base-100 border shadow">
      <div className="card-body">
        <h2 className="card-title">Task Status</h2>
        <p className="text-sm text-gray-500 mb-2">Select a ticket to add to Task Status</p>

        {tasks.length === 0 ? (
          <p className="text-gray-400">No active tasks</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((t) => (
              <li key={t.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                <span>{t.title}</span>
                <button onClick={() => onComplete(t.id)} className="btn btn-success btn-xs">Complete</button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Resolved Task</h3>
          {resolved.length === 0 ? (
            <p className="text-gray-400">No resolved tasks yet</p>
          ) : (
            <ul className="space-y-1">
              {resolved.map((r) => (
                <li key={r.id} className="text-sm bg-gray-50 p-2 rounded">{r.title}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
