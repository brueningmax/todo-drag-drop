const getAll = `
WITH RECURSIVE cte AS (
SELECT
t.*,
u.id AS user_id,
u.name AS user_name,
u.password AS user_password,
u.role AS user_role,
c.id AS client_id,
c.name AS client_name,
c.address AS client_address,
c.contact AS client_contact
FROM user u
LEFT JOIN todo t ON t.user = u.id
LEFT JOIN client c ON t.client = c.id
WHERE t.previous_todo IS 0 OR t.previous_todo IS NULL
UNION ALL
SELECT
t.*,
cte.user_id,
cte.user_name,
cte.user_password,
cte.user_role,
c.id AS client_id,
c.name AS client_name,
c.address AS client_address,
c.contact AS client_contact
FROM todo t
JOIN cte ON t.previous_todo = cte.id
JOIN client c ON t.client = c.id
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
ORDER BY CASE cte.user_id WHEN 1 THEN 0 WHEN 2 THEN 2 ELSE 1 END;`

module.exports = {
    getAll
};