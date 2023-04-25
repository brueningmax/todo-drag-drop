WITH RECURSIVE cte AS (
  SELECT id, user, priority, previous_todo, next_todo
  FROM todo
  WHERE previous_todo = 0
  
  UNION ALL
  
  SELECT t.id, t.user, t.priority, t.previous_todo, t.next_todo
  FROM todo t
  JOIN cte ON t.previous_todo = cte.id
)
SELECT
cte.user_id,
'{' ||
'user: {' ||
'id: ' || cte.user_id || ',' ||
'name: "' || cte.user_name || '",' ||
'password: "' || cte.user_password || '",' ||
'role: ' || cte.user_role ||
'},' ||
'todos: [' ||
GROUP_CONCAT(
'{' ||
'priority: "' || cte.priority || '",' ||
'previous_todo: "' || cte.previous_todo || '",' ||
'next_todo: "' || cte.next_todo || '",' ||
'type": ' || cte.type || '",' ||
'month: "' || cte.month || '",' ||
'year: "' || cte.year || '",' ||
'notes: "' || cte.notes || '",' ||
'status: "' || cte.status || '",' ||
'client: {' ||
'id: ' || cte.client_id || ',' ||
'name: "' || cte.client_name || '",' ||
'address: "' || cte.client_address || '",' ||
'contact: "' || cte.client_contact || '"' ||
'}' ||
'}'
,','
) ||
']' ||
'}' AS user_todos
FROM cte
GROUP BY cte.user_id
ORDER BY CASE cte.user_id WHEN 1 THEN 0 WHEN 2 THEN 2 ELSE 1 END;