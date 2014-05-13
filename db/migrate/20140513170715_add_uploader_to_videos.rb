class AddUploaderToVideos < ActiveRecord::Migration
  def change
    change_table :videos do |t|
      t.string :uploader
    end
  end
end
