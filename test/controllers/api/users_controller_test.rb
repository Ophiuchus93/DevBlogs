require 'test_helper'

class Api::UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_users_index_url
    assert_response :success
  end

  test "should get show" do
    get api_users_show_url
    assert_response :success
  end

end
