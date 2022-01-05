.PHONY: get list create update delete

get:
	curl \
	-X GET http://localhost:3000/users/0

list:
	curl \
	-X GET http://localhost:3000/users

post:
	curl \
	-d '{"name":"Bob", "age":5}' \
	-H "Content-Type: application/json" \
	-X POST http://localhost:3000/users

update:
	curl \
	-d '{"name":"Rick", "age":66}' \
	-H "Content-Type: application/json" \
	-X PUT http://localhost:3000/users/0

delete:
	curl \
	-X DELETE http://localhost:3000/users/0
