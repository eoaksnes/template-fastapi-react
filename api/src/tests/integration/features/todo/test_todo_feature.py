import pytest
from starlette.status import HTTP_200_OK, HTTP_422_UNPROCESSABLE_ENTITY

pytestmark = pytest.mark.integration


class TestTodo:
    @pytest.fixture(autouse=True)
    def setup_database(self, test_client):
        test_client.insert_many(
            [
                {"_id": "1", "id": "1", "title": "title 1"},
                {"_id": "2", "id": "2", "title": "title 2"},
            ]
        )

    def test_get_todo_all(self, test_app):
        response = test_app.get("/api/v1/todos")
        items = response.json()

        assert response.status_code == HTTP_200_OK
        assert len(items) == 2
        assert items[0]["id"] == "1"
        assert items[0]["title"] == "title 1"
        assert items[1]["id"] == "2"
        assert items[1]["title"] == "title 2"

    def test_get_todo_by_id(self, test_app):
        response = test_app.get("/api/v1/todos/1")

        assert response.status_code == HTTP_200_OK
        assert response.json()["id"] == "1"
        assert response.json()["title"] == "title 1"

    def test_add_todo(self, test_app):
        response = test_app.post("/api/v1/todos", json={"title": "title 3"})
        item = response.json()

        assert response.status_code == HTTP_200_OK
        assert item["title"] == "title 3"

    def test_add_todo_should_return_unprocessable_when_invalid_entity(self, test_app):
        response = test_app.post("/api/v1/todos", json=None)

        assert response.status_code == HTTP_422_UNPROCESSABLE_ENTITY

    def test_update_todo(self, test_app):
        response = test_app.put("/api/v1/todos/1", json={"title": "title 1 updated", "is_completed": False})

        assert response.status_code == HTTP_200_OK
        assert response.json()["success"]

    def test_update_todo_should_return_unprocessable_when_invalid_entity(self, test_app):
        response = test_app.put("/api/v1/todos/1", json={"title": ""})

        assert response.status_code == HTTP_422_UNPROCESSABLE_ENTITY

    def test_delete_todo(self, test_app):
        response = test_app.delete("/api/v1/todos/1")

        assert response.status_code == HTTP_200_OK
        assert response.json()["success"]
