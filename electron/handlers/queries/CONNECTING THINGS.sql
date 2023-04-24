WITH RECURSIVE cte AS (
  SELECT id, user, priority, previous_todo, next_todo
  FROM todo
  WHERE previous_todo IS NULL
  
  UNION ALL
  
  SELECT t.id, t.user, t.priority, t.previous_todo, t.next_todo
  FROM todo t
  JOIN cte ON t.previous_todo = cte.id
)
SELECT * FROM cte;