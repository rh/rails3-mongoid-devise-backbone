class NotesController < ApplicationController
  respond_to :json

  def index
    respond_with(@notes = Note.asc(:created_at))
  end

  def show
    @note = Note.find(params[:id])
    respond_with @note
  end

  def create
    @note = Note.new(params[:note])
    @note.save
    respond_with @note
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy

    respond_to do |format|
      format.json { head :no_content }
    end
  end
end
